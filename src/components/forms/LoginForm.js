import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import ReduxTextField from "./fields/ReduxTextField";
import validate from "./validation/login_form_validation";
import LocalApi from "./../../apis/local";
import { setAuthToken, setSnackbarSettings } from "./../../actions";

const styles = theme => ({
  paper: {
    // marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    height: "400px",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class LoginForm extends Component {
  onFormSubmit = formValues => {
    const { email, password } = formValues;
    const { setSnackbarSettings } = this.props;

    LocalApi.post("/auth/login", { email, password })
      .then(response => {
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/admin/dashboard");
      })
      .catch(err => {
        let message = "Server Error. Please try again later";
        if (err.response && err.response.status === 401) {
          message = "Invalid email or password";
        }
        setSnackbarSettings({
          open: true,
          variant: "error",
          message
        });
      });
  };

  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(this.onFormSubmit)}
        >
          <Field
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            component={ReduxTextField}
            margin="normal"
          />
          <Field
            type="password"
            label="Password"
            name="password"
            autoComplete="password"
            component={ReduxTextField}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            value="Login"
            className={classes.submit}
          >
            Log In
          </Button>
        </form>
      </Paper>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const WrappedLoginForm = reduxForm({
  form: "LoginForm",
  validate
})(LoginForm);

export default connect(
  null,
  {
    setAuthToken,
    setSnackbarSettings
  }
)(withStyles(styles)(withRouter(WrappedLoginForm)));
