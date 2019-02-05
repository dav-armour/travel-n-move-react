import axios from "axios";
import { store } from "./../Root";

//create an instance of axios
const LocalApi = axios.create({
  baseURL: process.env.REACT_APP_API_URI
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
