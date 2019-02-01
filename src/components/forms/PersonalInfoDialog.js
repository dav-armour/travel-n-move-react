import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ReduxTextField from "./fields/ReduxTextField";
import validate from "./validation/personal_info_validation";
import { setPersonalInfoDialogOpen, sendQuoteRequest } from "./../../actions";

class PersonalInfoDialog extends Component {
  onClose = () => {
    this.props.setPersonalInfoDialogOpen(false);
    this.props.reset();
  };

  onSubmit = personalDetails => {
    const {
      quoteType,
      setPersonalInfoDialogOpen,
      sendQuoteRequest
    } = this.props;
    setPersonalInfoDialogOpen(false);
    sendQuoteRequest(quoteType, personalDetails);
  };

  render() {
    const { handleSubmit, dialogOpen } = this.props;
    return (
      <>
        <Dialog
          open={dialogOpen}
          onClose={this.onClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Request Quote</DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DialogContent>
              <DialogContentText>
                Please enter your details so we can prepare your quote.
              </DialogContentText>
              <Field
                type="text"
                name="first_name"
                label="First Name"
                component={ReduxTextField}
                margin="dense"
              />
              <Field
                type="text"
                name="last_name"
                label="Last Name"
                component={ReduxTextField}
                margin="dense"
              />
              <Field
                type="email"
                name="email"
                label="Email"
                component={ReduxTextField}
                margin="dense"
              />
              <Field
                type="text"
                name="telephone"
                label="Phone Number"
                component={ReduxTextField}
                margin="dense"
              />
              <Field
                type="text"
                name="client_comments"
                label="Comments"
                component={ReduxTextField}
                margin="dense"
                multiline
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onClose} color="default">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Send Request
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    );
  }
}

const WrappedPersonalInfoDialog = reduxForm({
  form: "PersonalInfoDialog",
  validate
})(PersonalInfoDialog);

const mapStateToProps = state => {
  return {
    dialogOpen: state.dialog.personalInfoDialog.open
  };
};

export default connect(
  mapStateToProps,
  { setPersonalInfoDialogOpen, sendQuoteRequest }
)(withRouter(WrappedPersonalInfoDialog));
