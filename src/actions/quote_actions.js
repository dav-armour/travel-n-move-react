import LocalApi from "./../apis/local";

export const sendQuoteRequest = (quoteType, { client_comments, ...user }) => {
  let formName = "";
  switch (quoteType) {
    case "Flight":
      console.log("Sending flight quote");
      formName = "FlightForm";
      break;
    case "Hotel":
      console.log("Sending hotel quote");
      formName = "HotelForm";
      break;
    case "Holiday":
      console.log("Sending holiday quote");
      formName = "HolidayForm";
      break;
    default:
      break;
  }
  return async (dispatch, getState) => {
    try {
      const values = getState().form[formName].values;
      const data = { type: quoteType, ...values, user, client_comments };
      console.log("DATA: ", data);
      let response = await LocalApi.post("/quotes", data);
      console.log("RESPONSE: ", response.data);
      dispatch({
        type: "QUOTE",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateQuoteRequest = ({ _id, ...quoteDetails }) => {
  delete quoteDetails.user._id;
  delete quoteDetails.__v;
  delete quoteDetails.createdAt;
  delete quoteDetails.updatedAt;
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.put(`/quotes/${_id}`, quoteDetails);
      dispatch({
        type: "QUOTE",
        payload: response.data.quote
      });
      const { page, rowsPerPage } = getState().table_settings;
      response = await LocalApi.get("/quotes", {
        params: { page, rowsPerPage }
      });
      dispatch({
        type: "QUOTES",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getQuotes = () => {
  return async (dispatch, getState) => {
    const { page, rowsPerPage } = getState().table_settings;
    try {
      let response = await LocalApi.get("/quotes", {
        params: { page, rowsPerPage }
      });

      dispatch({
        type: "QUOTES",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setQuote = quoteDetails => {
  return {
    type: "QUOTE",
    payload: quoteDetails
  };
};

export const setQuoteDetailsDialogOpen = open => {
  return {
    type: "QUOTE_DETAILS_DIALOG_OPEN",
    payload: { open }
  };
};
