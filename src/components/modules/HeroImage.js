import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import QuoteFormTabs from "./QuoteFormTabs";

const styles = theme => ({
  bannerStyle: {
    minHeight: "700px",
    width: "100%",
    paddingTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },

  formContainer: {
    maxWidth: "1024px",
    marginTop: "0px",
    marginLeft: "80px"
  }
});

function HeroImage(props) {
  console.log(props);
  const { classes, imageLink } = props;

  return (
    <div
      className={classes.bannerStyle}
      style={{ backgroundImage: `url(${imageLink})` }}
    >
      {props.children}
    </div>
  );
}

HeroImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroImage);
