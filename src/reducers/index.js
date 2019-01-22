import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import toursReducer from "./tours_reducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  tours: toursReducer
});
