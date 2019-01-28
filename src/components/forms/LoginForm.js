import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { setAuthToken } from "./../../actions";
import { connect } from "react-redux";

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
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    console.log(this.props);
    const { email, password } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={event => this.onInputChange("email", event)}
          />
        </p>
        <p>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={password}
            onChange={event => this.onInputChange("password", event)}
          />
        </p>
        <p>
          <input type="submit" value="Login" />
        </p>
      </form>
    );
  }
}

export default connect(
  null,
  {
    setAuthToken
  }
)(withRouter(LoginForm));
