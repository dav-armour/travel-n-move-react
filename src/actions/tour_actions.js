import LocalApi from "./../apis/local";

export const getTours = (params = {}) => {
  return async (dispatch, getState) => {
    try {
      let response = await LocalApi.get("/tours", { params });

      dispatch({
        type: "TOURS",
        payload: response.data
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

export const createOrUpdateTour = ({ _id, ...tourDetails }) => {
  delete tourDetails.__v;
  delete tourDetails.createdAt;
  delete tourDetails.updatedAt;
  return async (dispatch, getState) => {
    try {
      let response = {};
      if (!_id) {
        response = await LocalApi.post("/tours", tourDetails);
      } else {
        response = await LocalApi.put(`/tours/${_id}`, tourDetails);
      }
      dispatch({
        type: "TOUR",
        payload: response.data
      });
      const { page, rowsPerPage } = getState().table_settings;
      response = await LocalApi.get("/tours", {
        params: { page, rowsPerPage }
      });
      dispatch({
        type: "TOURS",
        payload: response.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setTour = tourDetails => {
  return {
    type: "TOUR",
    payload: tourDetails
  };
};
