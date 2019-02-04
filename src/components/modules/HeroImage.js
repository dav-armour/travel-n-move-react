import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  bannerStyle: {
    width: "100%",
    paddingTop: "40px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
});

function HeroImage(props) {
  const { classes, imageLink, height } = props;

  return (
    <div
      className={classes.bannerStyle}
      style={{ backgroundImage: `url(${imageLink})`, height }}
    >
      {props.children}
    </div>
  );
}

HeroImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroImage);
