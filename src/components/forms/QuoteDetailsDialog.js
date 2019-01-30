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
import { createSelectNumberRange } from "./../../helpers//input_helpers";
import {
  setQuoteDetailsDialogOpen,
  updateQuoteRequest
} from "./../../actions/index";

class QuoteDetailsDialog extends Component {
  onClose = () => {
    this.props.setQuoteDetailsDialogOpen(false);
    this.props.reset();
  };

  onSubmit = formValues => {
    console.log(formValues);
    const { setQuoteDetailsDialogOpen, updateQuoteRequest } = this.props;
    setQuoteDetailsDialogOpen(false);
    updateQuoteRequest(formValues);
  };

  render() {
    const { handleSubmit, dialogOpen, quote } = this.props;
    return (
      <>
        <Dialog
          open={dialogOpen}
          onClose={this.onClose}
          aria-labelledby="form-dialog-title"
          scroll="body"
        >
          <DialogTitle id="form-dialog-title">Update Quote Details</DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <DialogContent style={{ paddingTop: 0 }}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    type="text"
                    name="user.first_name"
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
                    name="user.last_name"
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
                    name="user.email"
                    label="Email"
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
                    name="user.telephone"
                    label="Phone Number"
                    component={ReduxTextField}
                    margin="dense"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    type="date"
                    name="start_date"
                    label="Start Date"
                    component={ReduxTextField}
                    margin="dense"
                    // InputProps={{
                    //   readOnly: true
                    // }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    type="date"
                    name="end_date"
                    label="End Date"
                    component={ReduxTextField}
                    margin="dense"
                    // InputProps={{
                    //   readOnly: true
                    // }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    name="adults"
                    component={ReduxSelectField}
                    label="Adults"
                    selectOptions={createSelectNumberRange(1, 9)}
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    name="children"
                    component={ReduxSelectField}
                    label="Children"
                    selectOptions={createSelectNumberRange(0, 9)}
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                  <Field
                    type="text"
                    name="destination"
                    label="Destination"
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
                    name="type"
                    label="Type"
                    component={ReduxTextField}
                    margin="dense"
                    InputProps={{
                      readOnly: true
                    }}
                  />
                </Grid>
                {quote.type === "Flight" && (
                  <>
                    <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                      <Field
                        type="text"
                        name="origin"
                        label="Origin"
                        component={ReduxTextField}
                        margin="dense"
                        InputProps={{
                          readOnly: true
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                      <Field
                        name="ticket_type"
                        component={ReduxSelectField}
                        label="Ticket Type"
                        selectOptions={[
                          { value: "return", label: "Return" },
                          { value: "one_way", label: "One-Way" }
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                      <Field
                        name="seat_type"
                        component={ReduxSelectField}
                        label="Ticket Class"
                        selectOptions={[
                          { value: "economy", label: "Economy" },
                          {
                            value: "premium economy",
                            label: "Premium Economy"
                          },
                          { value: "business", label: "Business" },
                          { value: "first class", label: "First Class" }
                        ]}
                        margin="dense"
                      />
                    </Grid>
                  </>
                )}
                {quote.type === "Hotel" && (
                  <>
                    <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                      <Field
                        name="num_rooms"
                        component={ReduxSelectField}
                        label="Rooms"
                        selectOptions={createSelectNumberRange(1, 9)}
                        margin="dense"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                      <Field
                        name="num_stars"
                        component={ReduxSelectField}
                        label="Hotel Type"
                        selectOptions={createSelectNumberRange(1, 5, " Stars")}
                        margin="dense"
                      />
                    </Grid>
                  </>
                )}
                {quote.type === "Holiday" && (
                  <>
                    <Grid item xs={12} sm={6} style={{ padding: "0 16px" }}>
                      <Field
                        name="budget_tier"
                        component={ReduxSelectField}
                        label="Budget"
                        selectOptions={[
                          { value: "budget", label: "Budget" },
                          { value: "mid-range", label: "Mid Range" },
                          { value: "luxury", label: "Luxury" }
                        ]}
                        margin="dense"
                      />
                    </Grid>
                  </>
                )}
                {true && (
                  <Grid item xs={12} style={{ padding: "0 16px" }}>
                    <Field
                      type="text"
                      name="client_comments"
                      label="Client Comments"
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
                      { value: "researching", label: "Researching" },
                      { value: "pending", label: "Pending" },
                      { value: "finalized", label: "Finalized" },
                      { value: "declined", label: "Declined" }
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

const WrappedQuoteDetailsDialog = reduxForm({
  form: "QuoteDetailsDialog",
  enableReinitialize: true,
  validate
})(QuoteDetailsDialog);

const mapStateToProps = state => {
  const { start_date, end_date, ...initialValues } = state.quote;
  if (start_date) {
    initialValues.start_date = new Date(start_date).toISOString().split("T")[0];
  }
  if (end_date) {
    initialValues.end_date = new Date(end_date).toISOString().split("T")[0];
  }
  return {
    dialogOpen: state.dialog.quoteDetailsDialog.open,
    quote: state.quote,
    initialValues
  };
};

export default connect(
  mapStateToProps,
  { setQuoteDetailsDialogOpen, updateQuoteRequest }
)(withRouter(WrappedQuoteDetailsDialog));
