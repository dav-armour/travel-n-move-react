import React, { Component } from "react";
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
import { setMenuDrawerOpen, setAuthToken } from "./../../actions";

const styles = theme => ({
  logo: {
    flexGrow: 1,
    textDecoration: "none",
    [theme.breakpoints.down(375)]: {
      fontSize: "1rem"
    }
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
    fontSize: "1.25rem"
  },
  contactButton: {
    fontSize: "1.25rem",
    padding: 0,
    [theme.breakpoints.down(375)]: {
      fontSize: "1rem"
    }
  }
});

class NavBar extends Component {
  logout = () => {
    this.props.setAuthToken(null);
  };

  render() {
    const { classes, setMenuDrawerOpen, token } = this.props;
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
          <Typography
            variant="h6"
            color="inherit"
            className={classes.logo}
            component={Link}
            to="/"
          >
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
            0186-2225332
          </Button>
        </Toolbar>
        <Hidden smDown>
          <Toolbar className={classes.secondaryBar}>
            <div>
              <Button
                id="home-nav-link"
                className={classes.button}
                component={Link}
                to="/"
              >
                Home
              </Button>

              <Button
                id="tours-nav-link"
                className={classes.button}
                component={Link}
                to="/tours"
              >
                Tour Packages
              </Button>

              <Button
                id="about-nav-link"
                className={classes.button}
                component={Link}
                to="/about"
              >
                About Us
              </Button>

              <Button
                id="contact-nav-link"
                className={classes.button}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Button>

              {token ? (
                <>
                  <Button
                    id="dashboard-nav-link"
                    className={classes.button}
                    component={Link}
                    to="/admin/dashboard"
                  >
                    Dashboard
                  </Button>

                  <Button
                    id="logout-nav-link"
                    className={classes.button}
                    onClick={this.logout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  id="login-nav-link"
                  className={classes.button}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              )}
            </div>
          </Toolbar>
        </Hidden>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(
  mapStateToProps,
  { setMenuDrawerOpen, setAuthToken }
)(withStyles(styles)(NavBar));
