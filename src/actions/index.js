import LocalApi from "./../apis/local";

export const setAuthToken = token => {
  sessionStorage.setItem("token", token);
  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

export const setPersonalInfoDialogOpen = open => {
  return {
    type: "PERSONAL_INFO_DIALOG_OPEN",
    payload: { open }
  };
};

export const getTours = () => {
  return async (dispatch, getState) => {
    let response = await LocalApi.get("/tours");

    dispatch({
      type: "TOURS",
      payload: response.data.tours
    });
  };
};

export const sendQuote = (quoteType, { client_comments, ...user }) => {
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
        type: "QUOTE_REQUEST",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
