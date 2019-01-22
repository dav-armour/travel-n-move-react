const defaultState = {
  personalInfoDialog: { open: false }
};

// Action
// {
//   type: "PERSONAL_INFO_DIALOG_OPEN",
//   payload: { personalInfoDialog: { open } }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "PERSONAL_INFO_DIALOG_OPEN":
      return { ...state, personalInfoDialog: action.payload };
    default:
      return state;
  }
};
