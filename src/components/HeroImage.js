import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bannerStyle: {
        backgroundImage: 'url("https://loremflickr.com/1000/300/india")',
        minHeight: '300px',
        width: '100%',
        paddingTop: '100px'
    }
});

function HeroImage(props) {
    const { classes } = props;

    console.log(classes);

    return (
        <div className={classes.bannerStyle}>

        </div>
    );
}

HeroImage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroImage);