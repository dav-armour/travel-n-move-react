import LocalApi from "./../apis/local";
import { handleServerError } from "./../helpers/error_helper";
import {
  QUOTE,
  QUOTES,
  SET_SNACKBAR_SETTINGS,
  QUOTE_DETAILS_DIALOG_OPEN
} from "./types";

export const sendQuoteRequest = (quoteType, { client_comments, ...user }) => {
  let formName = "";
  switch (quoteType) {
    case "Flight":
      formName = "FlightForm";
      break;
    case "Hotel":
      formName = "HotelForm";
      break;
    case "Holiday":
      formName = "HolidayForm";
      break;
    default:
      break;
  }
  return async (dispatch, getState) => {
    try {
      const values = getState().form[formName].values;
      const data = { type: quoteType, ...values, user, client_comments };
      let response = await LocalApi.post("/quotes", data);
      dispatch({
        type: QUOTE,
        payload: response.data
      });
      dispatch({
        type: SET_SNACKBAR_SETTINGS,
        payload: {
          open: true,
          variant: "success",
          message: `Thank you for your request. An email has been sent to your account.`
        }
      });
    } catch (err) {
      handleServerError(err, dispatch);
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
        type: QUOTE,
        payload: response.data.quote
      });
      const { page, rowsPerPage } = getState().table_settings;
      response = await LocalApi.get("/quotes", {
        params: { page, rowsPerPage }
      });
      dispatch({
        type: QUOTES,
        payload: response.data
      });
      dispatch({
        type: SET_SNACKBAR_SETTINGS,
        payload: {
          open: true,
          variant: "success",
          message: `Succesfully updated`
        }
      });
    } catch (err) {
      handleServerError(err, dispatch);
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
        type: QUOTES,
        payload: response.data
      });
    } catch (err) {
      handleServerError(err, dispatch);
    }
  };
};

export const setQuote = quoteDetails => {
  return {
    type: QUOTE,
    payload: quoteDetails
  };
};

export const setQuoteDetailsDialogOpen = open => {
  return {
    type: QUOTE_DETAILS_DIALOG_OPEN,
    payload: { open }
  };
};
