import axios from "axios";
import store from "./../store";

//create an instance of axios
const LocalApi = axios.create({
  baseURL: "http://localhost:3001"
});

LocalApi.interceptors.request.use(function(config) {
  const state = store.getState();
  const { token } = state.auth;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default LocalApi;
