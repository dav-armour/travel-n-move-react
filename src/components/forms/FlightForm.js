import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { createSelectNumberRange } from "./../../helpers/input_helpers";
import PersonalInfoDialog from "./PersonalInfoDialog";
import ReduxTextField from "./fields/ReduxTextField";
import ReduxSelectField from "./fields/ReduxSelectField";
import ReduxCheckbox from "./fields/ReduxCheckbox";
import validate from "./validation/flight_form_validation";
import ReduxRadioGroup from "./fields/ReduxRadioGroup";
import { setPersonalInfoDialogOpen } from "./../../actions/index";

class FlightForm extends Component {
    onFormSubmit = formValues => {
        console.log("Clicked Request Quote. Opening Dialog");
        console.log(formValues);
        this.props.setPersonalInfoDialogOpen(true);
    };

    // onDialogSubmit = formValues => {
    //   setPersonalInfoDialogOpen(false);
    //   console.log("Dialog submitted back to form");
    //   console.log(formValues);
    // };

    render() {
        const { handleSubmit } = this.props;
        return (
            <>
                <form onSubmit={handleSubmit(this.onFormSubmit)}>
                    <div>
                        <Field
                            name="ticket_type"
                            component={ReduxRadioGroup}
                            radioOptions={[
                                { value: "return", label: "Return" },
                                { value: "one_way", label: "One-Way" }
                            ]}
                        />
                    </div>
                    <div>
                        <Field
                            type="text"
                            name="origin"
                            label="From"
                            component={ReduxTextField}
                            margin="dense"
                            // required
                            style={{ marginTop: 0 }}
                        />
                    </div>
                    <div>
                        <Field
                            type="text"
                            name="destination"
                            label="To"
                            // required
                            component={ReduxTextField}
                            margin="dense"
                        />
                    </div>
                    <div>
                        <Field
                            type="date"
                            name="start_date"
                            label="Start Date"
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
                            label="End Date"
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
                            name="seat_type"
                            component={ReduxSelectField}
                            label="Ticket Class"
                            selectOptions={[
                                { value: "economy", label: "Economy" },
                                { value: "premium_economy", label: "Premium Economy" },
                                { value: "business", label: "Business" },
                                { value: "first_class", label: "First Class" }
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
                <PersonalInfoDialog quoteType="Flight" />
            </>
        );
    }
}

const WrappedFlightForm = reduxForm({
    form: "FlightForm",
    validate
})(FlightForm);

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

export default connect(
    mapStateToProps,
    { setPersonalInfoDialogOpen }
)(withRouter(WrappedFlightForm));
