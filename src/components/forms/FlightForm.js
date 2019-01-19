
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';


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
        value: 'female',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

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
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        id="date"
                        label="arrival-date"
                        type="date"
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                </FormControl>

            </div>
        );
    }
}

RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);

