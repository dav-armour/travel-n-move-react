import LocalApi from "./../apis/local";

export const setAuthToken = token => {
  sessionStorage.setItem("token", token);
  return {
    type: "AUTH_TOKEN",
    payload: token
  };
};

export const getTours = () => {
  return async (dispatch, getState) => {
    let response = await LocalApi.get("/tours");

    dispatch({
      type: "TOURS",
      payload: response.data.tours
    });
  };
};
