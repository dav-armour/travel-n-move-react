import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getTours } from "./../../actions";
import TourCard from "./TourCard";

class CardsGrid extends Component {
  componentDidMount() {
    const { getTours, query } = this.props;
    getTours(query);
  }

  render() {
    const { tours } = this.props;
    return (
      <Grid container spacing={40}>
        {tours.map(tour => (
          <Grid item key={tour._id} sm={6} md={4} lg={3}>
            <TourCard {...tour} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    tours: state.tours.tours
  };
};

export default connect(
  mapStateToProps,
  { getTours }
)(CardsGrid);
