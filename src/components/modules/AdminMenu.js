import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { AdminMenuItems } from "./AdminMenuItems";

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: "relative",
    zIndex: 1000,
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});

function getDrawerStatusFromSession() {
  const status = sessionStorage.getItem("admin_menu_open");
  if (status === null) {
    return document.body.clientWidth > 600;
  }
  return JSON.parse(status);
}

class AdminMenu extends Component {
  state = {
    open: getDrawerStatusFromSession()
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
    sessionStorage.setItem("admin_menu_open", true);
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
    sessionStorage.setItem("admin_menu_open", false);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            {this.state.open ? (
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            ) : (
              <IconButton onClick={this.handleDrawerOpen}>
                <ChevronRightIcon />
              </IconButton>
            )}
          </div>
          <Divider />
          <List>{AdminMenuItems}</List>
        </Drawer>
      </div>
    );
  }
}

AdminMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminMenu);
