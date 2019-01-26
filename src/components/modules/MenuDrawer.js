import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { setMenuDrawerOpen } from "./../../actions";

const styles = {
  list: {
    width: 250
  }
};

class MenuDrawer extends React.Component {
  render() {
    const { classes, setMenuDrawerOpen } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/tours">
            <ListItemText primary="Tour Packages" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.open} onClose={() => setMenuDrawerOpen(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => setMenuDrawerOpen(false)}
            onKeyDown={() => setMenuDrawerOpen(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    open: state.menu_drawer.open
  };
};

export default connect(
  mapStateToProps,
  { setMenuDrawerOpen }
)(withStyles(styles)(MenuDrawer));
