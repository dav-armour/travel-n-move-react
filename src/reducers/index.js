import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import toursReducer from "./tours_reducer";
import tourReducer from "./tour_reducer";
import dialogReducer from "./dialog_reducer";
import quoteReducer from "./quote_reducer";
import { reducer as formReducer } from "redux-form";
import menuDrawerReducer from "./menu_drawer_reducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  tours: toursReducer,
  tour: tourReducer,
  dialog: dialogReducer,
  quote: quoteReducer,
  menu_drawer: menuDrawerReducer
});
