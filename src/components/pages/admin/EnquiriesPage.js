import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EnquiriesTable from "./../../modules/EnquiriesTable";
import AdminMenu from "../../modules/AdminMenu";

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

class EnquiriesPage extends Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AdminMenu />
        <main className={classes.content}>
          <Typography variant="h4" gutterBottom component="h2">
            Customer Enquiries
          </Typography>
          <div className={classes.tableContainer}>
            <EnquiriesTable />
          </div>
        </main>
      </div>
    );
  }
}

EnquiriesPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnquiriesPage);
