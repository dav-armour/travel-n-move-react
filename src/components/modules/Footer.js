import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footerWrapper: {
    width: "100%",
    height: "auto",
    marginTop: "20px",
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();

    return (
      <Paper className={classes.footerWrapper}>
        <Typography gutterBottom variant="body2" component="h2">
          Copyright © {currentYear} travelnmove.com. All Rights Reserved.
        </Typography>
        <Typography gutterBottom variant="body2" component="h2" color="primary">
          Travel N Move 2018
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Footer);
