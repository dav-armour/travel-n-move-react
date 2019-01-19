import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

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

function TopBanner(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <Grid container className={classes.root} spacing={16}>
                        <Grid item xs={12}>
                            <Grid container className={classes.demo} justify="space-around" >
                                <Typography variant="h6" color="inherit" className={classes.grow}>
                                    Travel N Move
                                </Typography>
                                <div>
                                    <FontAwesomeIcon icon="igloo" />
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
                        <Button className={classes.button}>Home</Button>
                        <Button className={classes.button}>
                            About Us
                        </Button>
                        <Button className={classes.button}>
                            Holiday Packages
                        </Button>
                        <Button className={classes.button}>
                            Flights
                        </Button>
                        <Button href="#text-buttons" className={classes.button}>
                            Hotels
                        </Button>
                        <Button href="#text-buttons" className={classes.button}>
                            Contact Us
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

TopBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBanner);

