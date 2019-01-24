import React from "react";
import TextField from "@material-ui/core/TextField";

const ReduxTextField = ({
  type,
  label,
  input,
  icon,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    type={type}
    label={label}
    error={touched && error ? true : false}
    helperText={touched && error}
    fullWidth={true}
    multiline={true}
    rows={3}
    rowsMax={5}
    // InputProps={{
    //   startAdornment: <InputAdornment position="start">{icon}</InputAdornment>
    // }}
    {...input}
    {...custom}
  />
);

export default ReduxTextField;
