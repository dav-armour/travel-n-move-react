import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import axiosAuth from "./middleware/axios_auth_middleware";

export let store;

export default ({ children, initialState = {} }) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return <Provider store={store}>{children}</Provider>;
};
