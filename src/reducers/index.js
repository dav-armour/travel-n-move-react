import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import toursReducer from "./tours_reducer";

export default combineReducers({
  auth: authReducer,
  tours: toursReducer
});
