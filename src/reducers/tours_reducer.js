const defaultState = [];
// Action
// {
//   type: "TOURS",
//   payload: [ tours ]
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "TOURS":
      return action.payload;
    default:
      return state;
  }
};
