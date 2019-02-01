import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AdminMenu from "../../modules/AdminMenu";
import OverviewCard from "./OverviewCard";
import { Grid } from "@material-ui/core";
import { red, blue, green } from "@material-ui/core/colors";
import { getAdminOverview } from "./../../../actions";

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

class DashboardPage extends Component {
  componentDidMount() {
    this.props.getAdminOverview();
  }

  render() {
    const { classes, quotes, enquiries, tours } = this.props;

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
                data={quotes}
                title="Quote Requests"
                updatedAt="26 Jan 2019"
                avatarStyle={{ backgroundColor: blue[500] }}
              />
            </Grid>
            <Grid item>
              <OverviewCard
                data={enquiries}
                title="Enquiries"
                updatedAt="25 Jan 2019"
                avatarStyle={{ backgroundColor: red[500] }}
              />
            </Grid>
            <Grid item>
              <OverviewCard
                data={tours}
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

const mapStateToProps = state => {
  const { quotes, enquiries, tours } = state.admin_overview;
  return {
    quotes,
    enquiries,
    tours
  };
};

export default connect(
  mapStateToProps,
  { getAdminOverview }
)(withStyles(styles)(DashboardPage));
