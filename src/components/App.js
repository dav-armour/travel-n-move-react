import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./modules/NavBar";
import HomePage from "./pages/HomePage";
import TourIndexPage from "./pages/TourIndexPage";
import TourShowPage from "./pages/TourShowPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";
import TourForm from "./forms/TourForm";
import MenuDrawer from "./modules/MenuDrawer";
import QuotesPage from "./pages/admin/QuotesPage";

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
              <Route exact path="/tours/new" component={TourForm} />
              <Route exact path="/tours/:id" component={TourShowPage} />
              <Route exact path="/about" component={AboutUsPage} />
              <Route exact path="/contact" component={ContactUsPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/admin/dashboard" component={QuotesPage} />
              <Route exact path="/admin/quotes" component={QuotesPage} />
              <Route exact path="/admin/enquiries" component={QuotesPage} />
              <Route exact path="/admin/tours" component={QuotesPage} />
              <Route exact path="/admin/tours/:id/edit" component={TourForm} />
              <Redirect from="*" to="/" />
            </Switch>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
