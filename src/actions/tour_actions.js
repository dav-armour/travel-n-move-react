import LocalApi from "./../apis/local";
import { handleServerError } from "./../helpers/error_helper";
import { TOUR, TOURS, SET_SNACKBAR_SETTINGS } from "./types";

export const getTours = (params = {}) => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get("/tours", { params });

      dispatch({
        type: TOURS,
        payload: response.data
      });
    } catch (err) {
      handleServerError(err, dispatch);
    }
  };
};

export const getTour = _id => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get(`/tours/${_id}`);

      dispatch({
        type: TOUR,
        payload: response.data.tour
      });
    } catch (err) {
      handleServerError(err, dispatch);
    }
  };
};

export const createOrUpdateTour = (_id, formData) => {
  formData.delete("__v");
  formData.delete("_id");
  formData.delete("updatedAt");
  formData.delete("createdAt");
  return async (dispatch, getState) => {
    try {
      let response = {};
      if (!_id) {
        response = await LocalApi.post("/tours", formData);
      } else {
        response = await LocalApi.put(`/tours/${_id}`, formData);
      }
      dispatch({
        type: TOUR,
        payload: response.data
      });
      const { page, rowsPerPage } = getState().table_settings;
      response = await LocalApi.get("/tours", {
        params: { page, rowsPerPage }
      });
      dispatch({
        type: TOURS,
        payload: response.data
      });
      const message = _id ? "updated" : "created";
      dispatch({
        type: SET_SNACKBAR_SETTINGS,
        payload: {
          open: true,
          variant: "success",
          message: `Succesfully ${message}`
        }
      });
    } catch (err) {
      handleServerError(err, dispatch);
    }
  };
};

export const setTour = tourDetails => {
  return {
    type: TOUR,
    payload: tourDetails
  };
};
