import React, { Component } from "react";
import { connect } from "react-redux";
import { getTours } from "./../../actions";

class TourIndexPage extends Component {
  componentDidMount() {
    const { getTours } = this.props;
    getTours();
  }

  render() {
    const { tours } = this.props;
    return (
      <div>
        <h1>Tour Page</h1>
        <p>Number of tours: {tours.length}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tours: state.tours
  };
};

export default connect(
  mapStateToProps,
  { getTours }
)(TourIndexPage);
