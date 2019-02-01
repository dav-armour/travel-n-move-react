import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import EnquiryForm from "./../forms/EnquiryForm";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  paper: {
    flexGrow: 1,
    minHeight: 390,
    // minWidth: 400,
    maxWidth: 410
    // minWidth: 300
  },
  mainWrapper: {
    marginTop: "40px"
  },
  contactWrapper: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center"
    // justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "30px",
    paddingTop: 15
  },
  contactRows: {
    // border: "1px solid black",
    marginBottom: "10px"
  },
  rowTitle: {
    fontWeight: "bold"
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
      <div className={classes.mainWrapper}>
        <Grid container spacing={16} justify="center">
          <Grid item xs={10} sm={6} md={4}>
            <Paper className={classes.paper}>
              <FormContainer>
                <EnquiryForm />
              </FormContainer>
            </Paper>
          </Grid>
          <Grid item xs={10} sm={6} md={4}>
            <Paper className={classes.paper}>
              <div className={classes.contactWrapper}>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.rowTitle}
                >
                  Our Details
                </Typography>
                <div className={classes.contactRows}>
                  <Typography variant="button" gutterBottom>
                    Registered Office:
                  </Typography>

                  <Typography variant="subheading" gutterBottom>
                    Indira Colony,Lane No:5, Pathankot, Punjab, 145001
                  </Typography>
                </div>
                <div className={classes.contactRows}>
                  <Typography variant="button" gutterBottom>
                    Branch Office:
                  </Typography>

                  <Typography variant="subheading" gutterBottom>
                    Shop No:13, First Floor, Gurjit Market, Dhangu Road,
                    Pathankot, Punjab, 145001
                  </Typography>
                </div>
                <div className={classes.contactRows}>
                  <Typography variant="button" gutterBottom>
                    Mobile:
                  </Typography>

                  <Typography variant="subheading" gutterBottom>
                    89687-05332
                  </Typography>
                </div>

                <div className={classes.contactRows}>
                  <Typography variant="button" gutterBottom>
                    Landline:
                  </Typography>
                  <Typography variant="subheading" gutterBottom>
                    0186-2225332
                  </Typography>
                </div>

                <div className={classes.contactRows}>
                  <Typography variant="button" gutterBottom>
                    Email:
                  </Typography>

                  <Typography variant="subheading" gutterBottom>
                    info@travelnmove.com, travelnmove1@gmail.com
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsPage);
