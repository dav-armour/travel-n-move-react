import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class PersonalInfoDialog extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        console.log("Opening dialog")
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleClickOpen}
                >
                    Request Quote
        </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Request Quote</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your details so we can prepare your quote.
            </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            label="Name"
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
