import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ReduxRadioGroup = ({ input, radioOptions, color, ...rest }) => (
  <RadioGroup row {...rest} onChange={input.onChange}>
    {radioOptions.map(option => (
      <FormControlLabel
        key={option.value}
        value={option.value}
        control={
          <Radio
            color={color || "primary"}
            checked={option.value === input.value}
          />
        }
        label={option.label}
      />
    ))}
  </RadioGroup>
);

export default ReduxRadioGroup;
