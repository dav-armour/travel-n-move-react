const defaultState = {};
// Action
// {
//   type: "TOUR",
//   payload: [ tours ]
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "TOUR":
      return action.payload;
    default:
      return state;
  }
};
