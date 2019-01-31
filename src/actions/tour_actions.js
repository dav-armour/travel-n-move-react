import LocalApi from "./../apis/local";

export const getTours = () => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get("/tours");

      dispatch({
        type: "TOURS",
        payload: response.data.tours
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getTour = _id => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get(`/tours/${_id}`);

      dispatch({
        type: "TOUR",
        payload: response.data.tour
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createOrUpdateTour = (_id, formData) => {
  return async (dispatch, getState) => {
    try {
      let response = {};
      if (!_id) {
        response = await LocalApi.post("/tours", formData);
      } else {
        response = await LocalApi.put(`/tours/${_id}`, formData);
      }
      dispatch({
        type: "TOUR",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};
