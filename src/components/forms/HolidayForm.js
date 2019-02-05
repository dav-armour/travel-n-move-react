import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import moment from "moment";
import { createSelectNumberRange } from "./../../helpers/input_helpers";
import PersonalInfoDialog from "./PersonalInfoDialog";
import ReduxTextField from "./fields/ReduxTextField";
import ReduxSelectField from "./fields/ReduxSelectField";
import validate from "./validation/hotel_form_validation";
import { setPersonalInfoDialogOpen } from "./../../actions";
import ReduxCheckbox from "./fields/ReduxCheckbox";

class HolidayForm extends Component {
  onFormSubmit = formValues => {
    this.props.setPersonalInfoDialogOpen(true);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field
              type="text"
              name="destination"
              label="Destination City"
              component={ReduxTextField}
              margin="dense"
            />
          </div>
          <div>
            <Field
              type="date"
              name="start_date"
              label="Check In Date"
              component={ReduxTextField}
              margin="dense"
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>
          <div>
            <Field
              type="date"
              name="end_date"
              label="Check Out Date"
              component={ReduxTextField}
              margin="dense"
              InputLabelProps={{
                shrink: true
              }}
            />
          </div>

          <div>
            <Field
              name="flexible_dates"
              label="My dates are flexible"
              component={ReduxCheckbox}
              margin="dense"
            />
          </div>

          <div>
            <Field
              name="adults"
              component={ReduxSelectField}
              label="Adults"
              selectOptions={createSelectNumberRange(1, 9)}
              margin="dense"
            />
          </div>
          <div>
            <Field
              name="children"
              component={ReduxSelectField}
              label="Children"
              selectOptions={createSelectNumberRange(0, 9)}
              margin="dense"
            />
          </div>
          <div>
            <Field
              name="budget"
              component={ReduxSelectField}
              label="Budget"
              selectOptions={[
                { value: "affordable", label: "Affordable" },
                { value: "premium", label: "Premium" },
                { value: "luxury", label: "Luxury" }
              ]}
              margin="dense"
            />
          </div>
          <div style={{ marginTop: 18 }}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth={true}
            >
              Request Quote
            </Button>
          </div>
        </form>
        <PersonalInfoDialog quoteType="Holiday" />
      </>
    );
  }
}

const WrappedHolidayForm = reduxForm({
  form: "HolidayForm",
  validate
})(HolidayForm);

const mapStateToProps = state => {
  return {
    dialogOpen: state.dialog.personalInfoDialog.open,
    initialValues: {
      start_date: moment().format("YYYY-MM-DD"),
      end_date: moment().format("YYYY-MM-DD"),
      adults: 1,
      children: 0,
      flexible_dates: false,
      budget: "affordable"
    }
  };
};

export default connect(
  mapStateToProps,
  { setPersonalInfoDialogOpen }
)(withRouter(WrappedHolidayForm));
