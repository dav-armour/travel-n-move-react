import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ReduxTextField from "./../forms/fields/ReduxTextField";
import ContactUsForm from "./../forms/contactUsForm";

class ContactUsPage extends Component {
  onFormSubmit = formValues => {};

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <ContactUsForm />
      </div>
    );
  }
}

const WrappedContactUsPage = reduxForm({
  form: "ContactUsPage"
})(ContactUsPage);

// const mapStateToProps = state => {
//   return {
//     initialValues: {
//       ticket_type: "return",
//       start_date: new Date().toISOString().split("T")[0],
//       end_date: new Date().toISOString().split("T")[0],
//       adults: 1,
//       children: 0,
//       seat_type: "economy",
//       flexible_dates: false
//     }
//   };
// };

export default withRouter(WrappedContactUsPage);
