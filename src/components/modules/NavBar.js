import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon"
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    secondaryBar: {
        background: '#fff',
        minHeight: '30px',
    }
});

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Grid container className={classes.root} spacing={16}>
                        <Grid item xs={12}>
                            <Grid container className={classes.demo} justify="space-around" >
                                <IconButton
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="Menu"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    Travel N Move
                                </Typography>
                                <div>
                                    <Link to="/contact">
                                        <Icon>
                                            <i class="material-icons">local_phone</i>
                                        </Icon>
                                    </Link>
                                    <Typography variant="h6" color="inherit" className={classes.grow}>
                                        0421631447
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Toolbar className={classes.secondaryBar}>
                    <div>
                        <Link to="/" >
                            <Button className={classes.button}>Home</Button>
                        </Link>

                        <Link to="/tours" >
                            <Button className={classes.button}>
                                Tour Packages
                            </Button>
                        </Link>

                        <Link to="/about" >
                            <Button className={classes.button}>
                                About Us
                            </Button>
                        </Link>

                        <Link to="/contact" >
                            <Button href="#text-buttons" className={classes.button}>
                                Contact Us
                            </Button>

                        </Link>

                        <Link to="/login" >
                            <Button href="#text-buttons" className={classes.button}>
                                Login
                            </Button>
                        </Link>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

