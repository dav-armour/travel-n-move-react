import React, { Component } from "react";

class TourShowPage extends Component {
  render() {
    console.log(this.props);
    return <div>ID: {this.props.match.params.id}</div>;
  }
}

export default TourShowPage;
