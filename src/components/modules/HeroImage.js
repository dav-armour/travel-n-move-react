import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import QuoteFormTabs from "./QuoteFormTabs";

const styles = theme => ({
  bannerStyle: {
    backgroundImage: 'url("./london-eye.jpg")',
    minHeight: "700px",
    width: "100%",
    paddingTop: "100px"
  },

  formContainer: {
    maxWidth: "1024px",
    marginTop: "50px",
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
