import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReduxTextField from "./fields/ReduxTextField";
import ReduxTextArea from "./fields/ReduxTextarea";
import validate from "./validation/contact_form_validation";

class ContactUsForm extends Component {
  onFormSubmit = formValues => {};

  // onDialogSubmit = formValues => {
  //   setPersonalInfoDialogOpen(false);
  //   console.log("Dialog submitted back to form");
  //   console.log(formValues);
  // };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field
              type="text"
              name="first_name"
              label="First Name"
              component={ReduxTextField}
              margin="dense"
              // required
              style={{ marginTop: 0 }}
            />
          </div>
          <div>
            <Field
              type="text"
              name="last_name"
              label="Last Name"
              component={ReduxTextField}
              margin="dense"
            />
          </div>
          <div>
            <Field
              type="text"
              name="email"
              label="Email"
              component={ReduxTextField}
              margin="dense"
            />
          </div>
          <div>
            <Field
              type="text"
              name="subject"
              label="Subject"
              component={ReduxTextField}
            />
          </div>
          <div>
            <Field
              type="text"
              name="message"
              label="Message"
              component={ReduxTextArea}
            />
          </div>
          <div style={{ marginTop: 18 }}>
            <div />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth={true}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const WrappedFlightForm = reduxForm({
  form: "ContactUsForm",
  validate
})(ContactUsForm);

const mapStateToProps = state => {
  return {
    dialogOpen: state.dialog.personalInfoDialog.open,
    initialValues: {
      ticket_type: "return",
      start_date: new Date().toISOString().split("T")[0],
      end_date: new Date().toISOString().split("T")[0],
      adults: 1,
      children: 0,
      seat_type: "economy",
      flexible_dates: false
    }
  };
};

export default connect(mapStateToProps)(withRouter(WrappedFlightForm));
