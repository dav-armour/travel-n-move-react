import LocalApi from "./../apis/local";

export const getEnquiries = () => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get("/enquiries");

      dispatch({
        type: "ENQUIRIES",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getEnquiry = _id => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get(`/enquiries/${_id}`);

      dispatch({
        type: "ENQUIRY",
        payload: response.data.enquiry
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createOrUpdateEnquiry = ({ _id, ...enquiryDetails }) => {
  delete enquiryDetails.__v;
  delete enquiryDetails.createdAt;
  delete enquiryDetails.updatedAt;
  return async (dispatch, getState) => {
    try {
      let response = {};
      if (!_id) {
        response = await LocalApi.post("/enquiries", enquiryDetails);
      } else {
        response = await LocalApi.put(`/enquiries/${_id}`, enquiryDetails);
      }
      dispatch({
        type: "ENQUIRY",
        payload: response.data
      });
      const { page, rowsPerPage } = getState().table_settings;
      response = await LocalApi.get("/enquiries", {
        params: { page, rowsPerPage }
      });
      dispatch({
        type: "ENQUIRIES",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setEnquiry = enquiryDetails => {
  return {
    type: "ENQUIRY",
    payload: enquiryDetails
  };
};

export const setEnquiryDetailsDialogOpen = open => {
  return {
    type: "ENQUIRY_DETAILS_DIALOG_OPEN",
    payload: { open }
  };
};
