import React, { Component } from "react";
import CardsGrid from "./../modules/CardsGrid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HeroImage from "./../modules/HeroImage";

const styles = theme => ({
  titleText: {
    margin: "0 auto",
    textAlign: "center",
    paddingTop: "10px"
  },
  cardsGrid: {
    marginTop: "20px"
  },
  heroImage: {
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.7)"
    }
  }
});
class TourIndexPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <HeroImage imageLink="./londonEye.jpg" height={"40vh"} />
        <Typography variant="h2" className={classes.titleText} gutterBottom>
          Tour Packages
        </Typography>
        <div className={classes.cardsGrid}>
          <CardsGrid query={{}} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TourIndexPage);
