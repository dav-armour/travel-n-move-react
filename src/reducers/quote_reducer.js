const defaultState = {};
// Action
// {
//   type: "QUOTE",
//   payload: {}
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "QUOTE":
      return action.payload;
    default:
      return state;
  }
};
