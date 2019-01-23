import React, { Component } from "react";
import { connect } from "react-redux";
import { getTours } from "./../../actions";
import TourCard from "./../modules/TourCard";
import Grid from "@material-ui/core/Grid";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";

class HomePage extends Component {
  componentDidMount() {
    const { getTours } = this.props;
    getTours();
  }

  render() {
    const { tours } = this.props;
    console.log('Tour Index Page', tours);

    return (
      <div>
        <HeroImage />
        <MiddleBanner />

        {<Grid container spacing={40}>
          {tours.map(tour => (
            <Grid item key={tour.id} sm={6} md={4} lg={3}>
              <TourCard {...tour} />
            </Grid>
          ))}
        </Grid>}

      </div>
    );
  }
}

//previously export default homepage, connected with action to get tours 
const mapStateToProps = state => {
  return {
    tours: state.tours
  };
};

export default connect(
  mapStateToProps,
  { getTours }
)(HomePage);

