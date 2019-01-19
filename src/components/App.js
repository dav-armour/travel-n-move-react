import React, { Component } from "react";
import TopBanner from "./TopBanner";
import Cards from "./Cards";
import HeroImage from "./HeroImage";

class App extends Component {
  render() {
    return (
      <div>
        <TopBanner />
        <HeroImage />
        <Cards />
      </div>
    );
  }
}

export default App;