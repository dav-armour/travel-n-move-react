import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const renderCheckbox = ({ input, label, color }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={input.value ? true : false}
        onChange={input.onChange}
        color={color || "primary"}
      />
    }
    label={label}
  />
);

export default renderCheckbox;
