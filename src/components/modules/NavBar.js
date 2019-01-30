import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LocalPhone from "@material-ui/icons/LocalPhone";
import { setMenuDrawerOpen } from "./../../actions";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -14
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  secondaryBar: {
    background: "#fff",
    minHeight: "30px"
  },
  label: {
    fontSize: "1.25em"
  },
  contactButton: {
    fontSize: "1.25em",
    padding: 0
  }
});

function NavBar(props) {
  const { classes, setMenuDrawerOpen } = props;
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => setMenuDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Travel N Move
        </Typography>
        <Button
          size="large"
          className={classes.contactButton}
          color="inherit"
          component={Link}
          to="/contact"
        >
          <LocalPhone className={classes.leftIcon} />
          0421631447
        </Button>
      </Toolbar>
      <Hidden smDown>
        <Toolbar className={classes.secondaryBar}>
          <div>
            <Button className={classes.button} component={Link} to="/">
              Home
            </Button>

            <Button className={classes.button} component={Link} to="/tours">
              Tour Packages
            </Button>

            <Button className={classes.button} component={Link} to="/about">
              About Us
            </Button>

            <Button className={classes.button} component={Link} to="/contact">
              Contact Us
            </Button>

            <Button className={classes.button} component={Link} to="/login">
              Login
            </Button>

            <Button className={classes.button} component={Link} to="/tours/new">
              Tour Form
            </Button>
          </div>
        </Toolbar>
      </Hidden>
    </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { setMenuDrawerOpen }
)(withStyles(styles)(NavBar));
