import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class ReduxTextField extends Component {
  state = { current: "" };

  onChange = event => {
    const {
      input: { onChange },
      type
    } = this.props;
    let value = event.target.value;

    if (type === "file") {
      this.setState({ current: value });
      value = event.target.files[0];
    }

    onChange(value);
  };

  render() {
    const {
      label,
      meta: { touched, error },
      input,
      ...other
    } = this.props;
    const { value, onChange, ...otherInput } = input;
    const { current } = this.state;

    return (
      <TextField
        {...other}
        {...otherInput}
        label={label}
        value={other.type === "file" ? current : value}
        onChange={this.onChange}
        error={touched && error ? true : false}
        helperText={touched && error}
        fullWidth={true}
      />
    );
  }
}

export default ReduxTextField;
