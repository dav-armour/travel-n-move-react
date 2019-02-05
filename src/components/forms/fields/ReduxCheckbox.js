import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ReduxCheckbox = ({ input, label, color, ...custom }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
        color={color || "primary"}
        {...custom}
      />
    }
    label={label}
  />
);

export default ReduxCheckbox;
