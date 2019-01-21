import React, { Component } from "react";
import Cards from "../modules/Cards";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <MiddleBanner />
        <Cards />
      </div>
    );
  }
}

export default HomePage;
