import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  pageContentWrapper: {
    paddingTop: theme.spacing.unit * 8,
    minHeight: "calc(100vh - 174px)",
    [theme.breakpoints.up(405)]: {
      minHeight: "calc(100vh - 150px)"
    },
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
      <div className={classes.pageContentWrapper}>
        <LoginForm />
      </div>
    );
  }
}

export default withStyles(styles)(LoginPage);
