import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AdminMenu from "../../modules/AdminMenu";
import OverviewCard from "./OverviewCard";
import { Grid } from "@material-ui/core";
import { red, blue, green } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  }
});

let id = 0;
function createData(status, qty) {
  id += 1;
  return { id, status, qty };
}

const quotes = [
  createData("New", 5),
  createData("Researching", 2),
  createData("Pending", 4),
  createData("Finalized", 30),
  createData("Declined", 10)
];
const enquiries = [
  createData("New", 2),
  createData("Researching", 3),
  createData("Pending", 4),
  createData("Closed", 25)
];
const tours = [
  createData("Featured", 5),
  createData("Active", 20),
  createData("Inactive", 3)
];

class DashboardPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AdminMenu />
        <main className={classes.content}>
          <Typography variant="h4" gutterBottom component="h2">
            Dashboard
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            spacing={24}
          >
            <Grid item>
              <OverviewCard
                rows={quotes}
                title="Quote Requests"
                updatedAt="26 Jan 2019"
                avatarStyle={{ backgroundColor: blue[500] }}
              />
            </Grid>
            <Grid item>
              <OverviewCard
                rows={enquiries}
                title="Enquiries"
                updatedAt="25 Jan 2019"
                avatarStyle={{ backgroundColor: red[500] }}
              />
            </Grid>
            <Grid item>
              <OverviewCard
                rows={tours}
                title="Tour Packages"
                updatedAt="23 Jan 2019"
                avatarStyle={{ backgroundColor: green[500] }}
              />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DashboardPage);
