import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";
import HomePage from "./pages/HomePage";
import TourIndexPage from "./pages/TourIndexPage";
import TourShowPage from "./pages/TourShowPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/tours" component={TourIndexPage} />
            <Route exact path="/tours/:id" component={TourShowPage} />
            <Route exact path="/about" component={AboutUsPage} />
            <Route exact path="/contact" component={ContactUsPage} />
            <Route exact path="/login" component={LoginPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;