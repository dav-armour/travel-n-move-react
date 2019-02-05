import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LoginForm from "../forms/LoginForm";

const styles = theme => ({
  mainWrapper: {
    minHeight: "calc(100vh - 149px)",
    paddingTop: theme.spacing.unit * 8,

    [theme.breakpoints.up(600)]: {
      minHeight: "calc(100vh - 158px)"
    },

    [theme.breakpoints.up(960)]: {
      minHeight: "calc(100vh - 194px)"
    }
  }
});

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainWrapper}>
        <LoginForm />
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
