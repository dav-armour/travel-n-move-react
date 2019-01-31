import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import toursReducer from "./tours_reducer";
import tourReducer from "./tour_reducer";
import dialogReducer from "./dialog_reducer";
import quoteReducer from "./quote_reducer";
import quotesReducer from "./quotes_reducer";
import enquiryReducer from "./enquiry_reducer";
import enquiriesReducer from "./enquiries_reducer";
import { reducer as formReducer } from "redux-form";
import menuDrawerReducer from "./menu_drawer_reducer";
import tableReducer from "./table_reducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  tours: toursReducer,
  tour: tourReducer,
  dialog: dialogReducer,
  quote: quoteReducer,
  quotes: quotesReducer,
  enquiry: enquiryReducer,
  enquiries: enquiriesReducer,
  menu_drawer: menuDrawerReducer,
  table_settings: tableReducer
});
