import React, { Component } from "react";
import CardsGrid from "./../modules/CardsGrid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HeroImage from "./../modules/HeroImage";

const styles = theme => ({
  pageContentWrapper: {
    minHeight: "calc(100vh - 154px)",
    [theme.breakpoints.up(405)]: {
      minHeight: "calc(100vh - 130px)"
    },
    [theme.breakpoints.up(600)]: {
      minHeight: "calc(100vh - 138px)"
    },
    [theme.breakpoints.up(960)]: {
      minHeight: "calc(100vh - 174px)"
    }
  },
  titleText: {
    margin: "0 auto",
    textAlign: "center",
    paddingTop: "10px"
  },
  cardsGrid: {
    marginTop: "20px"
  }
});

class TourIndexPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pageContentWrapper}>
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
