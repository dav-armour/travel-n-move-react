const defaultState = {
  enquiries: {
    new: 0,
    researching: 0,
    pending: 0,
    closed: 0,
    total: 0,
    last_updated: null
  },
  quotes: {
    new: 0,
    researching: 0,
    pending: 0,
    finalized: 0,
    declined: 0,
    total: 0,
    last_updated: null
  },
  tours: {
    featured: 0,
    total: 0,
    last_updated: null
  }
};

// Action
// {
//   type: "ADMIN_OVERVIEW",
//   payload: { enquiries, quotes, tours }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADMIN_OVERVIEW":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
