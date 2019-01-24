import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ContactUsForm from "./../forms/contactUsForm";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { FormLabel } from "@material-ui/core";

const styles = theme => ({
  paper: {
    flexGrow: 1
    // minWidth: 300
  }
});

function FormContainer(props) {
  return (
    <Typography component="div" style={{ padding: "12px 24px 24px" }}>
      {props.children}
    </Typography>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class ContactUsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <FormContainer>
                <ContactUsForm />
              </FormContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <FormContainer>
                <FormLabel>Our Contact</FormLabel>
              </FormContainer>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsPage);
