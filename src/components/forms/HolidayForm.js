import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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
        budget: "",
        labelWidth: 0
    };

    // handleChange = event => {
    //     this.setState({ value: event.target.value });
    // };

    handleChangeDropdown = event => {
        this.setState({ budget: event.target.value });

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
                        id="start-date"
                        label="Start Date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="end-date"
                        label="End date"
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    {/* <Grid> */}

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="budget-count-select">Budget</InputLabel>
                        <Select
                            value={this.state.budget}
                            onChange={this.handleChangeDropdown}
                            inputProps={{
                                name: 'budget',
                                id: 'budget-count-select',
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>

                            <MenuItem value={1}>Budget</MenuItem>
                            <MenuItem value={2}>Luxury</MenuItem>
                            <MenuItem value={3}>Premium</MenuItem>

                        </Select>
                    </FormControl>


                    {/* </Grid> */}

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