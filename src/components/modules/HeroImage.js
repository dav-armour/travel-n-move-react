import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import QuoteFormTabs from "./QuoteFormTabs";

const styles = theme => ({
  bannerStyle: {
    background: 'url("./london-eye.jpg") no-repeat center center',
    backgroundSize: "cover",
    minHeight: "500px",
    width: "100%",
    padding: "50px 0"
  },

  formContainer: {
    maxWidth: "1024px",
    marginLeft: "80px"
  }
});

function HeroImage(props) {
  const { classes } = props;

  return (
    <div className={classes.bannerStyle}>
      <div className={classes.formContainer}>
        <QuoteFormTabs />
      </div>
    </div>
  );
}

HeroImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeroImage);
