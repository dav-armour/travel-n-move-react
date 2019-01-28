import React, { Component } from "react";
import CardsGrid from "./../modules/CardsGrid";

class TourIndexPage extends Component {
  render() {
    const { tours } = this.props;
    console.log("Tour Index Page", tours);

    return (
      <div>
        <h1>Tour Page</h1>
        <div>
          <CardsGrid />
        </div>
      </div>
    );
  }
}

export default TourIndexPage;
