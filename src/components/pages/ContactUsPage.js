import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import EnquiryForm from "./../forms/EnquiryForm";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  pageContentWrapper: {
    paddingTop: theme.spacing.unit * 8,
    minHeight: "calc(100vh - 174px)",
    [theme.breakpoints.up(405)]: {
      minHeight: "calc(100vh - 150px)"
    },
    [theme.breakpoints.up(600)]: {
      minHeight: "calc(100vh - 158px)"
    },
    [theme.breakpoints.up(960)]: {
      minHeight: "calc(100vh - 194px)"
    }
  },
  paper: {
    flexGrow: 1,
    minHeight: 390,
    maxWidth: 410
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
  },
  formGridItem: {
    padding: 20,
    [theme.breakpoints.up(600)]: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }
});

class ContactUsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pageContentWrapper}>
        <Grid container>
          <Grid item xs={12} sm={6} className={classes.formGridItem}>
            <Paper className={classes.paper}>
              <Typography component="div" style={{ padding: "12px 24px 24px" }}>
                <EnquiryForm />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} style={{ padding: 20 }}>
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
