import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AdminMenu from "../../modules/AdminMenu";
import TourForm from "../../forms/TourForm";

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  tableContainer: {
    height: 320
  }
});

class TourEditCreatePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AdminMenu />
        <main className={classes.content}>
          <TourForm />
        </main>
      </div>
    );
  }
}

TourEditCreatePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TourEditCreatePage);
