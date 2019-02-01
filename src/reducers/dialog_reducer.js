const defaultState = {
  personalInfoDialog: { open: false },
  quoteDetailsDialog: { open: false },
  enquiryDetailsDialog: { open: false }
};

// Action
// {
//   type: "PERSONAL_INFO_DIALOG_OPEN",
//   payload: { personalInfoDialog: { open } }
// }
// {
//   type: "QOUTE_DETAILS_DIALOG_OPEN",
//   payload: { quoteDetailsDialog: { open } }
// }
// {
//   type: "ENQUIRY_DETAILS_DIALOG_OPEN",
//   payload: { enquiryDetailsDialog: { open } }
// }

export default (state = defaultState, action) => {
  switch (action.type) {
    case "PERSONAL_INFO_DIALOG_OPEN":
      return { ...state, personalInfoDialog: action.payload };
    case "QUOTE_DETAILS_DIALOG_OPEN":
      return { ...state, quoteDetailsDialog: action.payload };
    case "ENQUIRY_DETAILS_DIALOG_OPEN":
      return { ...state, enquiryDetailsDialog: action.payload };
    default:
      return state;
  }
};
