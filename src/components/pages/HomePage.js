import React, { Component } from "react";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";
import CardsGrid from "./../modules/CardsGrid";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage />
        <MiddleBanner />
        <CardsGrid query={{ featured: true }} />
      </div>
    );
  }
}
export default HomePage;
