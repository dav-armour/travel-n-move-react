import LocalApi from "./../apis/local";
import { handleServerError } from "./../helpers/error_helper";

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

export const setMenuDrawerOpen = open => {
  return {
    type: "MENU_DRAWER_OPEN",
    payload: { open }
  };
};

export const setTableSettings = settings => {
  return {
    type: "SET_TABLE_SETTINGS",
    payload: settings
  };
};

export const setSnackbarSettings = settings => {
  return {
    type: "SET_SNACKBAR_SETTINGS",
    payload: settings
  };
};

export const getAdminOverview = () => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get("/admin/overview");

      dispatch({
        type: "ADMIN_OVERVIEW",
        payload: response.data
      });
    } catch (err) {
      handleServerError(err, dispatch);
    }
  };
};
