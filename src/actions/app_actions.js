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
