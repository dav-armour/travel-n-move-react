import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import photo from "./../../public/london-eye.jpg"

const styles = theme => ({
    bannerStyle: {
        backgroundImage: 'url("./london-eye.jpg")',
        minHeight: '500px',
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