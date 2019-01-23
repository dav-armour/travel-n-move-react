import React, { Component } from "react";
import { connect } from "react-redux";
import { getTours } from "./../../actions";
import TourCard from "./../modules/TourCard";
import Grid from "@material-ui/core/Grid";

class TourIndexPage extends Component {
  componentDidMount() {
    const { getTours } = this.props;
    getTours();
  }

  render() {
    const { tours } = this.props;
    console.log('Tour Index Page', tours);

    return (
      <div>
        <h1>Tour Page</h1>
        <div>
          {<Grid container spacing={40}>
            {tours.map(tour => (
              <Grid item key={tour.id} sm={6} md={4} lg={3}>
                <TourCard {...tour} />
              </Grid>
            ))}
          </Grid>}
        </div>
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
