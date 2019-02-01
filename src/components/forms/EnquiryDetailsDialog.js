import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import ReduxTextField from "./fields/ReduxTextField";
import ReduxSelectField from "./fields/ReduxSelectField";
import validate from "./validation/personal_info_validation";
import {
  setEnquiryDetailsDialogOpen,
  createOrUpdateEnquiry
} from "./../../actions";

class EnquiryDetailsDialog extends Component {
  onClose = () => {
    this.props.setEnquiryDetailsDialogOpen(false);
    this.props.reset();
  };

  onSubmit = formValues => {
    const { setEnquiryDetailsDialogOpen, createOrUpdateEnquiry } = this.props;
    setEnquiryDetailsDialogOpen(false);
    createOrUpdateEnquiry(formValues);
  };

  render() {
    const { handleSubmit, dialogOpen } = this.props;
    return (
      <>
        <Dialog
          open={dialogOpen}
          onClose={this.onClose}
          aria-labelledby="form-dialog-title"
          scroll="body"
        >
          <DialogTitle id="form-dialog-title">
            Update Enquiry Details
          </DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DialogContent style={{ paddingTop: 0 }}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    type="text"
                    name="first_name"
                    label="First Name"
                    component={ReduxTextField}
                    margin="dense"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    type="text"
                    name="last_name"
                    label="Last Name"
                    component={ReduxTextField}
                    margin="dense"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    type="email"
                    name="email"
                    label="Email"
                    component={ReduxTextField}
                    margin="dense"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} style={{ padding: "0 16px" }}>
                  <Field
                    type="text"
                    name="subject"
                    label="Subject"
                    component={ReduxTextField}
                    margin="dense"
                    InputProps={{
                      readOnly: true
                    }}
                    multiline
                  />
                </Grid>
                {true && (
                  <Grid item xs={12} style={{ padding: "0 16px" }}>
                    <Field
                      type="text"
                      name="message"
                      label="Message"
                      component={ReduxTextField}
                      margin="dense"
                      InputProps={{
                        readOnly: true
                      }}
                      multiline
                    />
                  </Grid>
                )}
                <Grid item xs={12} style={{ padding: "0 16px" }}>
                  <Field
                    type="text"
                    name="agent_comments"
                    label="Agent Comments"
                    component={ReduxTextField}
                    margin="dense"
                    multiline
                  />
                </Grid>
                <Grid item xs={12} style={{ padding: "0 16px" }}>
                  <Field
                    name="status"
                    component={ReduxSelectField}
                    label="Status"
                    selectOptions={[
                      { value: "new", label: "New" },
                      { value: "pending", label: "Pending" },
                      { value: "researching", label: "Researching" },
                      { value: "closed", label: "Closed" }
                    ]}
                    margin="dense"
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.onClose} color="default">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Update
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    );
  }
}

const WrappedEnquiryDetailsDialog = reduxForm({
  form: "EnquiryDetailsDialog",
  enableReinitialize: true,
  validate
})(EnquiryDetailsDialog);

const mapStateToProps = state => {
  const { ...initialValues } = state.enquiry;
  return {
    dialogOpen: state.dialog.enquiryDetailsDialog.open,
    enquiry: state.enquiry,
    initialValues
  };
};

export default connect(
  mapStateToProps,
  { setEnquiryDetailsDialogOpen, createOrUpdateEnquiry }
)(withRouter(WrappedEnquiryDetailsDialog));
