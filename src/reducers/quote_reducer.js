const defaultState = {};
// Action
// {
//   type: "TOURS",
//   payload: {}
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "QUOTE_REQUEST":
      return action.payload;
    default:
      return state;
  }
};
