const defaultState = {};
// Action
// {
//   type: "ENQUIRY",
//   payload: {}
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ENQUIRY":
      return action.payload;
    default:
      return state;
  }
};
