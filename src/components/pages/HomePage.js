import React, { Component } from "react";
import CardsGrid from "../modules/CardsGrid";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";
import QuoteFormTabs from "./../modules/QuoteFormTabs";
import { withStyles } from "@material-ui/core";

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
  }
});

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pageContentWrapper}>
        <HeroImage imageLink={"./londonEye.jpg"} height={"740px"}>
          <QuoteFormTabs />
        </HeroImage>
        <MiddleBanner />
        <CardsGrid query={{ featured: true }} />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
