import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },

  popular: {
    marginBottom: "0px"
  },
  typo: {
    backgroundColor: "#0000FF"
  }
});

function MiddleBanner(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Toolbar className={classes.popular}>
        <Grid container className={classes.root} justify="center">
          <Typography variant="h4" color="inherit" className={classes.popular}>
            Popular Tour Packages
          </Typography>
        </Grid>
      </Toolbar>
    </div>
  );
}

MiddleBanner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MiddleBanner);
