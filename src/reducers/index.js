import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import adminOverviewReducer from "./admin_overview_reducer";
import authReducer from "./auth_reducer";
import dialogReducer from "./dialog_reducer";
import enquiriesReducer from "./enquiries_reducer";
import enquiryReducer from "./enquiry_reducer";
import menuDrawerReducer from "./menu_drawer_reducer";
import quoteReducer from "./quote_reducer";
import quotesReducer from "./quotes_reducer";
import snackbarReducer from "./snackbar_reducer";
import tableReducer from "./table_reducer";
import tourReducer from "./tour_reducer";
import toursReducer from "./tours_reducer";

export default combineReducers({
  admin_overview: adminOverviewReducer,
  auth: authReducer,
  dialog: dialogReducer,
  enquiries: enquiriesReducer,
  enquiry: enquiryReducer,
  form: formReducer,
  menu_drawer: menuDrawerReducer,
  quote: quoteReducer,
  quotes: quotesReducer,
  snackbar: snackbarReducer,
  table_settings: tableReducer,
  tour: tourReducer,
  tours: toursReducer
});
