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
    maxWidth: 410
  },
  mainWrapper: {
    minHeight: "calc(100vh - 149px)",
    paddingTop: theme.spacing.unit * 8,

    [theme.breakpoints.up(600)]: {
      minHeight: "calc(100vh - 158px)"
    },

    [theme.breakpoints.up(960)]: {
      minHeight: "calc(100vh - 194px)"
    }
    // mainWrapper: {
    //   paddingTop: "40px",
    //   minHeight: "74vh",
    //   width: "100%",

    //   [theme.breakpoints.up("sm")]: {
    //     minHeight: "calc(100vh - 184px)",
    //     border: "1px solid white"
    //   },
    //   [theme.breakpoints.up("md")]: {
    //     minHeight: "calc(100vh - 220px)",
    //     border: "1px solid black"
    //   },
    //   [theme.breakpoints.up("lg")]: {
    //     minHeight: "calc(100vh - 240px)",
    //     border: "1px solid red"
    //   },
    //   [theme.breakpoints.up("xl")]: {
    //     minHeight: "calc(100vh - 800px)",
    //     border: "1px solid blue"
    //   }
  },
  contactWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "30px",
    paddingTop: 15
  },
  contactRows: {
    marginBottom: "10px"
  },
  rowTitle: {
    fontWeight: 500
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
        <Grid container spacing={24} justify="center">
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
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
