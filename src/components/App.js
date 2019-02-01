import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./modules/NavBar";
import HomePage from "./pages/HomePage";
import TourIndexPage from "./pages/TourIndexPage";
import TourShowPage from "./pages/TourShowPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginForm from "./forms/LoginForm";
import TourEditCreatePage from "./pages/admin/TourEditCreatePage";
import MenuDrawer from "./modules/MenuDrawer";
import QuotesPage from "./pages/admin/QuotesPage";
import EnquiriesPage from "./pages/admin/EnquiriesPage";
import ToursPage from "./pages/admin/ToursPage";
import DashboardPage from "./pages/admin/DashboardPage";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <>
            <NavBar />
            <MenuDrawer />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/tours" component={TourIndexPage} />
              <Route exact path="/tours/:id" component={TourShowPage} />
              <Route exact path="/about" component={AboutUsPage} />
              <Route exact path="/contact" component={ContactUsPage} />
              <Route exact path="/login" component={LoginForm} />
              <PrivateRoute
                exact
                path="/admin/dashboard"
                component={DashboardPage}
              />
              <PrivateRoute exact path="/admin/quotes" component={QuotesPage} />
              <PrivateRoute
                exact
                path="/admin/enquiries"
                component={EnquiriesPage}
              />
              <PrivateRoute exact path="/admin/tours" component={ToursPage} />
              <PrivateRoute
                exact
                path="/admin/tours/new"
                component={() => <TourEditCreatePage />}
              />
              <PrivateRoute
                exact
                path="/admin/tours/:id/edit"
                component={() => <TourEditCreatePage />}
              />
              <Redirect from="*" to="/" />
            </Switch>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
