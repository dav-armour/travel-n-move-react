
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
import Button from '@material-ui/core/Button'
import PersonalInfoDialog from "./PersonalInfoDialog";


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

class RadioButtonsGroup extends React.Component {
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
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <div className={classes.radioButtonsContainer}>
                            <FormControlLabel value="one-way" control={<Radio />} label="One Way" />
                            <FormControlLabel value="round-trip" control={<Radio />} label="Round Trip" />
                        </div>
                    </RadioGroup>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="from"
                        label="From"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        required
                        margin="dense"
                        id="to"
                        label="To"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        id="date"
                        label="departure-date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        id="date"
                        label="arrival-date"
                        type="date"
                        className={classes.textField} onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    {/* <Grid> */}

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="adults-count-select">Adults</InputLabel>
                        <Select
                            value={this.state.audultsCount}
                            onChange={this.handleChangeDropdown}
                            inputProps={{
                                name: 'adultsCount',
                                id: 'adults-count-select',
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

                    <PersonalInfoDialog />

                </FormControl>

            </div >
        );
    }
}





RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);

