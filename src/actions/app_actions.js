import LocalApi from "./../apis/local";
import { handleServerError } from "./../helpers/error_helper";
import {
  AUTH_TOKEN,
  PERSONAL_INFO_DIALOG_OPEN,
  MENU_DRAWER_OPEN,
  SET_TABLE_SETTINGS,
  SET_SNACKBAR_SETTINGS,
  ADMIN_OVERVIEW
} from "./types";

export const setAuthToken = token => {
  if (token) {
    sessionStorage.setItem("token", token);
  } else {
    sessionStorage.removeItem("token");
  }
  return {
    type: AUTH_TOKEN,
    payload: token
  };
};

export const setPersonalInfoDialogOpen = open => {
  return {
    type: PERSONAL_INFO_DIALOG_OPEN,
    payload: { open }
  };
};

export const setMenuDrawerOpen = open => {
  return {
    type: MENU_DRAWER_OPEN,
    payload: { open }
  };
};

export const setTableSettings = settings => {
  return {
    type: SET_TABLE_SETTINGS,
    payload: settings
  };
};

export const setSnackbarSettings = settings => {
  return {
    type: SET_SNACKBAR_SETTINGS,
    payload: settings
  };
};

export const getAdminOverview = () => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get("/admin/overview");

      dispatch({
        type: ADMIN_OVERVIEW,
        payload: response.data
      });
    } catch (err) {
      handleServerError(err, dispatch);
    }
  };
};
