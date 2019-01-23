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

class HotelForm extends Component {
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
                            name="room"
                            component={ReduxSelectField}
                            label="Room"
                            selectOptions={createSelectNumberRange(1, 9)}
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
                            name="hotel_type"
                            component={ReduxSelectField}
                            label="Hotel Type"
                            selectOptions={createSelectNumberRange(1, 5, " Stars")}
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

const WrappedHotelForm = reduxForm({
    form: "HotelForm",
    validate
})(HotelForm);

const mapStateToProps = state => {
    return {
        dialogOpen: state.dialog.personalInfoDialog.open,
        initialValues: {
            check_in_date: new Date().toISOString().split("T")[0],
            check_out_date: new Date().toISOString().split("T")[0],
            adults: 1,
            children: 0,
            room: 1,
            hotel_type: 1
        }
    };
};

export default connect(

    mapStateToProps,
    { setPersonalInfoDialogOpen }
)(withRouter(WrappedHotelForm));





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

// class HotelForm extends React.Component {
//     state = {
//         value: "female",
//         roomCount: "",
//         adultCount: "",
//         childrenCount: "",
//         ticketType: "",
//         labelWidth: 0,
//         personalInfo: "false",
//         hotelType: ""
//     };

//     onRequestQuoteClick = event => {
//         this.setState({ personalInfo: "true" })
//     }

//     handleChange = event => {
//         this.setState({ value: event.target.value });
//     };

//     handleChangeAdult = event => {
//         this.setState({ adultCount: event.target.value });

//     };

//     handleChangeRooms = event => {
//         this.setState({ roomCount: event.target.value });

//     };

//     handleChangeChildren = event => {
//         this.setState({ childrenCount: event.target.value });

//     };
//     handleChangeHotelType = event => {
//         this.setState({ hotelType: event.target.value });
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
//                         id="FirstName"
//                         label="First Name"
//                         type="text"
//                         fullWidth
//                     />

//                     <TextField
//                         required
//                         margin="dense"
//                         id="LastName"
//                         label="Last Name"
//                         type="text"
//                         fullWidth
//                     />
//                     <TextField
//                         required
//                         margin="dense"
//                         id="Phone"
//                         label="Phone"
//                         type="text"
//                         fullWidth
//                     />
//                     <TextField
//                         required
//                         margin="dense"
//                         id="email"
//                         label="Email"
//                         type="text"
//                         fullWidth
//                     />
//                     <TextField
//                         required
//                         margin="dense"
//                         id="DestinationCity"
//                         label="Destination City"
//                         type="text"
//                         fullWidth
//                     />
//                     <TextField
//                         id="date"
//                         label="Check In Date"
//                         type="date"
//                         className={classes.textField}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />


//                     {/* <Grid> */}

//                     <FormControl className={classes.formControl}>
//                         <InputLabel htmlFor="audults-count-select">Rooms</InputLabel>
//                         <Select
//                             value={this.state.roomCount}
//                             onChange={this.handleChangeRooms}
//                             inputProps={{
//                                 name: 'roomCount',
//                                 id: 'room-count-select',
//                             }}
//                         >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>

//                             <MenuItem value={1}>1</MenuItem>
//                             <MenuItem value={2}>2</MenuItem>
//                             <MenuItem value={3}>3</MenuItem>
//                             <MenuItem value={4}>4</MenuItem>
//                             <MenuItem value={5}>5</MenuItem>
//                             <MenuItem value={6}>6</MenuItem>
//                             <MenuItem value={7}>7</MenuItem>
//                             <MenuItem value={8}>8</MenuItem>
//                             <MenuItem value={9}>9</MenuItem>
//                             <MenuItem value={10}>10</MenuItem>
//                         </Select>
//                     </FormControl>

//                     <FormControl className={classes.formControl}>
//                         <InputLabel htmlFor="audults-count-select">Adults</InputLabel>
//                         <Select
//                             value={this.state.adultCount}
//                             onChange={this.handleChangeAdult}
//                             inputProps={{
//                                 name: 'adultCount',
//                                 id: 'adults-count-select',
//                             }}
//                         >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>

//                             <MenuItem value={1}>1</MenuItem>
//                             <MenuItem value={2}>2</MenuItem>
//                             <MenuItem value={3}>3</MenuItem>
//                             <MenuItem value={4}>4</MenuItem>
//                             <MenuItem value={5}>5</MenuItem>
//                             <MenuItem value={6}>6</MenuItem>
//                             <MenuItem value={7}>7</MenuItem>
//                             <MenuItem value={8}>8</MenuItem>
//                             <MenuItem value={9}>9</MenuItem>
//                             <MenuItem value={10}>10</MenuItem>
//                         </Select>
//                     </FormControl>



//                     <FormControl className={classes.formControl}>
//                         <InputLabel htmlFor="audults-count-select">Children</InputLabel>
//                         <Select
//                             value={this.state.childrenCount}
//                             onChange={this.handleChangeChildren}
//                             inputProps={{
//                                 name: 'childrenCount',
//                                 id: 'children-count-select',
//                             }}
//                         >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>

//                             <MenuItem value={1}>1</MenuItem>
//                             <MenuItem value={2}>2</MenuItem>
//                             <MenuItem value={3}>3</MenuItem>
//                             <MenuItem value={4}>4</MenuItem>
//                             <MenuItem value={5}>5</MenuItem>
//                             <MenuItem value={6}>6</MenuItem>
//                             <MenuItem value={7}>7</MenuItem>
//                             <MenuItem value={8}>8</MenuItem>
//                             <MenuItem value={9}>9</MenuItem>
//                             <MenuItem value={10}>10</MenuItem>
//                         </Select>
//                     </FormControl>

//                     <FormControl className={classes.formControl}>
//                         <InputLabel htmlFor="hotelType-count-select">Hotel Type</InputLabel>
//                         <Select
//                             value={this.state.hotelType}
//                             onChange={this.handleChangeHotelType}
//                             inputProps={{
//                                 name: 'hotelType',
//                                 id: 'hotel-count-select',
//                             }}
//                         >
//                             <MenuItem value="">
//                                 <em>None</em>
//                             </MenuItem>

//                             <MenuItem value={1}>1 Star</MenuItem>
//                             <MenuItem value={2}>2 Stars</MenuItem>
//                             <MenuItem value={3}>3 Stars</MenuItem>
//                             <MenuItem value={4}>4 Stars</MenuItem>
//                             <MenuItem value={5}>5 Stars</MenuItem>

//                         </Select>
//                     </FormControl>

//                     {/* <Button variant="contained" color="secondary" onClick={this.onRequestQuoteClick}>
//                         Request Quote
//                     </Button>
//                     {this.getPersonalInfoForm()} */}
//                     <PersonalInfoDialog />

//                     {/* </Grid> */}

//                 </FormControl>

//             </div >
//         );
//     }
// }

// // export default HotelForm;
// export default withStyles(styles)(HotelForm);
