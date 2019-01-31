import LocalApi from "./../apis/local";

export const getEnquiries = () => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get("/enquiries");

      dispatch({
        type: "ENQUIRIES",
        payload: response.data.tours
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getEnquiry = _id => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get(`/tours/${_id}`);

      dispatch({
        type: "ENQUIRY",
        payload: response.data.tour
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createOrUpdateEnquiry = (_id, formData) => {
  return async (dispatch, getState) => {
    try {
      let response = {};
      if (!_id) {
        response = await LocalApi.post("/enquiries", formData);
      } else {
        response = await LocalApi.put(`/enquiries/${_id}`, formData);
      }
      dispatch({
        type: "ENQUIRY",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
