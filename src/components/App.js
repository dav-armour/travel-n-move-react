import React, { Component } from "react";
import TopBanner from "./TopBanner";
import Cards from "./Cards";
import HeroImage from "./HeroImage";
import MiddleBanner from "./MiddleBanner";

class App extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <HeroImage />
        <MiddleBanner />
        <Cards />
      </div>
    );
  }
}

export default App;