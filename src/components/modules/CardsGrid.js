import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TourCard from "./TourCard";
import {
    withStyles,
    createMuiTheme,

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

function CardsGrid(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    <Grid container spacing={40}>
                        {cards.map(card => (
                            <Grid item key={CardsGrid} sm={CardsGrid} md={4} lg={3}>
                                <TourCard />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </main>
        </React.Fragment >
    );
}

CardsGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardsGrid);