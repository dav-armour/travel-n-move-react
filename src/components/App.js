import React, { Component } from "react";
// import Header from "./components/header";
import Cards from "./Cards";
import HeroImage from "./HeroImage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <HeroImage />
        <Cards />
      </div>
    );
  }
}

export default App;