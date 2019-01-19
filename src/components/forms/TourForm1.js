import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class TourForm extends React.Component {
    state = {
        open: false,
        message: ""

    };

    handleClickOpen = (type) => {

        //this.setState({ open: true });
        switch (type) {
            case "Flight":
                return this.setState({ open: true, message: "Request for Flight Quote" })
            case "Hotel":
                return this.setState({ open: true, message: "Request for Hotel Quote" })
            case "Holidays":
                return this.setState({ open: true, message: "Request for Holidays Quote" })
            default:
                return null
        }


    };

    handleClose = () => {
        this.setState({ open: false });
    };

    quoteDisplayWindow(quoteType) {
        alert("you clicked");
    }
    render() {
        return (
            <div>

                <Button
                    variant="contained"
                    width="55px"
                    color="primary"
                    onClick={() => this.handleClickOpen("Flight")}
                >
                    Flight
        </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleClickOpen("Hotel")}
                >
                    Hotel
        </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.handleClickOpen("Holidays")}
                >
                    Holidays
        </Button>
                <Dialog
                    open={this.state.open}
                    message={this.state.message}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{this.state.message}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your details so we can prepare your quote.
            </DialogContentText>

                        <TextField
                            autoFocus
                            id="date-local"
                            label="From Date"
                            type="date"
                            //label="From Date"
                            defaultValue="dd/mm/yy"
                            width="10px"
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            // autoFocus
                            required
                            margin="dense"
                            id="name"
                            label="First Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            //autoFocus
                            required
                            margin="dense"
                            id="name"
                            label="Last Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            required
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            required
                            margin="dense"
                            id="phone"
                            label="Phone Number"
                            type="phone"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="comment"
                            label="Additional Comments"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="info">
                            Cancel
            </Button>
                        <Button
                            variant="contained"
                            onClick={this.handleClose}
                            color="primary"
                        >
                            Send Request
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

// TourForm.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(TourForm);
