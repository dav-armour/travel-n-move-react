import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  navBarContainer: {
    marginBottom: "200px" //margin bottom is to push content under the nav bar David
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  secondaryBar: {
    background: "#fff",
    minHeight: "30px"
  }
});

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.navBarContainer}>
      <AppBar>
        <Toolbar>
          <Grid container className={classes.root} spacing={16}>
            <Grid item xs={12}>
              <Grid container className={classes.demo} justify="space-around">
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                >
                  Travel N Move
                </Typography>
                <div>
                  <Link to="/contact">
                    <Icon>
                      <i className="material-icons">local_phone</i>
                    </Icon>
                  </Link>
                  <Typography
                    variant="h6"
                    color="inherit"
                    className={classes.grow}
                  >
                    0421631447
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
