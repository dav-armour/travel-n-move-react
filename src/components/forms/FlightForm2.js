import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import { Radio, RadioGroup } from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import asyncValidate from "./asyncValidate";
import validate from "./validate";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <Select
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const FlightForm2 = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="ticketType" component={renderRadioGroup}>
          <Radio value="return" label="Return" />
          <Radio value="one-way" label="One-Way" />
        </Field>
      </div>
      <div>
        <Field name="origin" component={renderTextField} label="From" />
      </div>
      <div>
        <Field name="destination" component={renderTextField} label="To" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="adults" component={renderSelectField} label="Adults">
          <MenuItem value="1" primaryText="1" />
          <MenuItem value="2" primaryText="2" />
          <MenuItem value="3" primaryText="3" />
        </Field>
      </div>
      <div>
        <Field name="children" component={renderSelectField} label="Children">
          <MenuItem value="1" primaryText="1" />
          <MenuItem value="2" primaryText="2" />
          <MenuItem value="3" primaryText="3" />
        </Field>
      </div>
      <div>
        <Field
          name="ticketClass"
          component={renderSelectField}
          label="Ticket Class"
        >
          <MenuItem value="economy" primaryText="Economy" />
          <MenuItem value="premiumEconomy" primaryText="Premium Economy" />
          <MenuItem value="business" primaryText="Business" />
          <MenuItem value="firstClass" primaryText="First Class" />
        </Field>
      </div>
      {/* <div>
        <Field name="flexible" component={renderCheckbox} label="Flexible Dates" />
      </div> */}
      {/* <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiLine={true}
          rows={2}
        />
      </div> */}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "FlightForm2", // a unique identifier for this form
  validate,
  asyncValidate
})(FlightForm2);
