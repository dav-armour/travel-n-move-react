import React, { Component } from "react";

class TourShowPage extends Component {
  render() {
    return <div>ID: {this.props.match.params.id}</div>;
  }
}

export default TourShowPage;
