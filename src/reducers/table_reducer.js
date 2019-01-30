const defaultState = {
  page: 0,
  rowsPerPage: 5
};

// Action
// {
//   type: "SET_TABLE_SETTINGS",
//   payload: { setting }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TABLE_SETTINGS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
