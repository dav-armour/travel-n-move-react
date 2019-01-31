import React, { Component } from "react";
import { connect } from "react-redux";
import { getTour } from "./../../actions";

class TourShowPage extends Component {
  componentDidMount() {
    const { getTour, match } = this.props;
    const { id } = match.params;
    getTour(id);
  }
  render() {
    const { tour } = this.props;
    console.log("tour:", tour);
    return <div>{tour.title}</div>;

    // ) <div>ID: {this.props.match.params.id}</div>;
  }
}

const mapStateToProps = state => {
  return {
    tour: state.tour
  };
};

export default connect(
  mapStateToProps,
  { getTour }
)(TourShowPage);
