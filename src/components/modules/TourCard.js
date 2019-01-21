import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
    withStyles,
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    palette: {
        primary: green
    },
    typography: {
        useNextVariants: true
    },
    text: {
        color: "white"
    }
});

const styles = theme => ({

    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`
    },
    cardMedia: {
        paddingTop: "56.25%" // 16:9
    },
    cardActions: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }

});
const cards = [1, 2, 3, 4];



function onCardClick() {
    alert("its working");
}

function TourCard(props) {
    const { classes } = props;

    return (
        <Card className={classes.card} onClick={onCardClick}>
            <CardMedia
                className={classes.cardMedia}
                image="https://loremflickr.com/300/300/india"
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    Heading
                </Typography>
                <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                </Typography>
            </CardContent>
            <CardActions>
                <MuiThemeProvider theme={theme}>
                    <Button
                        size="small"
                        text="white"
                        color="primary"
                        variant="contained"
                    >
                        View
                    </Button>
                </MuiThemeProvider>
                <Button size="small" color="primary" variant="contained">
                    Edit
                </Button>
            </CardActions>
        </Card>
    )

}

TourCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TourCard);
