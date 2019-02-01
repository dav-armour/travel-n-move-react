const defaultState = {
  enquiries: [],
  total: 0
};
// Action
// {
//   type: "ENQUIRIES",
//   payload: { enquiries: [ enquiries ], total: total }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ENQUIRIES":
      return action.payload;
    default:
      return state;
  }
};
