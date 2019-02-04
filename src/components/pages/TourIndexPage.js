import React, { Component } from "react";
import CardsGrid from "./../modules/CardsGrid";

class TourIndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Tour Page</h1>
        <div>
          <CardsGrid query={{}} />
        </div>
      </div>
    );
  }
}

export default TourIndexPage;
