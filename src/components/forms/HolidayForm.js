import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { createSelectNumberRange } from "./../../helpers/input_helpers";
import PersonalInfoDialog from "./PersonalInfoDialog";
import ReduxTextField from "./fields/ReduxTextField";
import ReduxSelectField from "./fields/ReduxSelectField";
import validate from "./validation/hotel_form_validation";
import { setPersonalInfoDialogOpen } from "./../../actions/index";
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
                            name="budget_tier"
                            component={ReduxSelectField}
                            label="Budget"
                            selectOptions={[
                                { value: "budget", label: "Budget" },
                                { value: "mid-range", label: "Mid Range" },
                                { value: "luxury", label: "Luxury" },
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
                <PersonalInfoDialog quoteType="Hotel" />
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
            start_date: new Date().toISOString().split("T")[0],
            end_date: new Date().toISOString().split("T")[0],
            adults: 1,
            children: 0,
            flexible_dates: false,
            budget_tier: "Bdget"
        }
    };
};

export default connect(

    mapStateToProps,
    { setPersonalInfoDialogOpen }
)(withRouter(WrappedHolidayForm));





// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from "@material-ui/core/TextField";
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import PersonalInfoDialog from "./PersonalInfoDialog";


// const styles = theme => ({
//     root: {
//         display: 'flex',
//     },
//     formControl: {
//         margin: theme.spacing.unit * 3,
//     },
//     group: {
//         margin: `${theme.spacing.unit}px 0`,
//     },
//     radioButtonsContainer: {
//         display: "flex",
//     }
// });

// class RadioButtonsGroup extends React.Component {
//     state = {
//         value: "female",
//         budget: "",
//         labelWidth: 0
//     };

//     // handleChange = event => {
//     //     this.setState({ value: event.target.value });
//     // };

//     handleChangeDropdown = event => {
//         this.setState({ budget: event.target.value });

//     };

//     render() {
//         const { classes } = this.props;

//         console.log('state on render', this.state);

//         return (
//             <div className={classes.root}>
//                 <FormControl component="fieldset" className={classes.formControl}>


//                     <TextField
//                         autoFocus
//                         required
//                         margin="dense"
//                         id="from"
//                         label="From"
//                         type="text"
//                         fullWidth
//                     />

//                     <TextField
//                         required
//                         margin="dense"
//                         id="to"
//                         label="To"
//                         type="text"
//                         fullWidth
//                     />
//                     <TextField
//                         id="start-date"
//                         label="Start Date"
//                         type="date"
//                         className={classes.textField}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />
//                     <TextField
//                         id="end-date"
//                         label="End date"
//                         type="date"
//                         className={classes.textField}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />

//                     {/* <Grid> */}

//                     <FormControl className={classes.formControl}>
//                         <InputLabel htmlFor="budget-count-select">Budget</InputLabel>
//                         <Select
//                             value={this.state.budget}
//                             onChange={this.handleChangeDropdown}
//                             inputProps={{
//                                 name: 'budget',
//                                 id: 'budget-count-select',
//                             }}
//                         >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>

//                             <MenuItem value={1}>Budget</MenuItem>
//                             <MenuItem value={2}>Mid Range</MenuItem>
//                             <MenuItem value={3}>Premium</MenuItem>

//                         </Select>
//                     </FormControl>


//                     {/* </Grid> */}

//                     <PersonalInfoDialog />

//                 </FormControl>

//             </div >
//         );
//     }
// }





// RadioButtonsGroup.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(RadioButtonsGroup);