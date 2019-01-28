const defaultState = {
  open: false
};

// Action
// {
//   type: "MENU_DRAWER_OPEN",
//   payload: { open }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "MENU_DRAWER_OPEN":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
