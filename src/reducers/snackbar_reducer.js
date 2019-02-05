const defaultState = {
  open: false,
  message: "",
  variant: "info"
};

// Action
// {
//   type: "SET_SNACKBAR_SETTINGS",
//   payload: { settings }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SNACKBAR_SETTINGS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
