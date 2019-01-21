import React, { Component } from "react";
// import CardsGrid from "../modules/CardsGrid";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <MiddleBanner />
        {/* <CardsGrid /> */}
      </div>
    );
  }
}

export default HomePage;
