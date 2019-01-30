const defaultState = {
  quotes: [],
  total: 0
};
// Action
// {
//   type: "QUOTES",
//   payload: { quotes: [ quotes ], total: total }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "QUOTES":
      return action.payload;
    default:
      return state;
  }
};
