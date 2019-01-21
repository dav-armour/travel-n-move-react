import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    radioButtonsContainer: {
        display: "flex",
    }
});

class HotelForm extends React.Component {
    state = {
        value: "female",
        audultsCount: "",
        labelWidth: 0
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleChangeDropdown = event => {
        this.setState({ audultsCount: event.target.value });

        console.log('new state', this.state);
    };

    render() {
        const { classes } = this.props;

        console.log('state on render', this.state);

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="FirstName"
                        label="First Name"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        required
                        margin="dense"
                        id="LastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        required
                        margin="dense"
                        id="Phone"
                        label="Phone"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        required
                        margin="dense"
                        id="email"
                        label="Email"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        required
                        margin="dense"
                        id="DestinationCity"
                        label="Destination City"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        id="date"
                        label="Check In Date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                    {/* <Grid> */}

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="audults-count-select">Rooms</InputLabel>
                        <Select
                            value={this.state.audultsCount}
                            onChange={this.handleChangeDropdown}
                            inputProps={{
                                name: 'audultsCount',
                                id: 'audults-count-select',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>

                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>


                    {/* </Grid> */}

                    <FormControl className={classes.formControl}>
                        <InputLabel>Ticket Class</InputLabel>
                        <Select>

                            <MenuItem value={10}>Economy</MenuItem>
                            <MenuItem value={20}>Business</MenuItem>
                            <MenuItem value={30}>Premium</MenuItem>

                        </Select>
                    </FormControl>


                </FormControl>

            </div >
        );
    }
}





HotelForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HotelForm);
