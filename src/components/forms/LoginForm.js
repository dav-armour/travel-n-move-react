import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { setAuthToken } from "./../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    height: "400px",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
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
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    axios
      .post("http://localhost:3001/auth/login", { email, password })
      .then(response => {
        this.props.setAuthToken(response.data.token);
        this.props.history.push("/admin/dashboard");
      })
      .catch(err => console.log(err));
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    console.log(this.props);
    const { email, password } = this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.onFormSubmit}>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <form className={classes.form}>
              {" "}
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>{" "}
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={event => this.onInputChange("email", event)}
                />{" "}
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={event => this.onInputChange("password", event)}
                />
              </FormControl>
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
        </main>
      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  {
    setAuthToken
  }
)(withStyles(styles)(withRouter(LoginForm)));
