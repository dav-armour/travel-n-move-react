import React, { Component } from "react";
import HeroImage from "./../modules/HeroImage";
import { withStyles } from "@material-ui/core/styles";
import classes from "*.module.css";

const styles = theme => {
  aboutUsWrapper: {
  }
};

class AboutUsPage extends Component {
  render() {
    return (
      <div>
        <HeroImage imageLink="./londonEye.jpg" height={"40vh"} />
        <div className={classes.aboutUsWrapper} />
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsPage);

// export default withStyles(styles)(
//   connect(
//   mapStateToProps,
//   { getTour }
//   )(TourShowPage)
//   );
