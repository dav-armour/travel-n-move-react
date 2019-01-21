import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FlightForm from "./FlightForm";
import HotelForm from "./HotelForm";
import TourForm from "./TourForm";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    bannerStyle: {
        backgroundImage: 'url("./london-eye.jpg")',
        minHeight: "500px",
        width: "100%",
        paddingTop: "100px",
    },

    formContainer: {
        maxWidth: "1024px",
        marginTop: "50px",
        marginLeft: "80px"

    },
    tabContainer: {
        width: "500px"

    },
    tabItems: {
        padding: "0px",
        margin: "0px",
        color: "grey"
    }


});

class TabContainer extends React.Component {
    state = {
        value: 2,
        itemOption: "Tours"
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    onMenuItemClick(itemOption) {
        this.setState({ itemOption })

    }




    getForm() {

        const { itemOption } = this.state;

        switch (itemOption) {
            case "Flights":
                console.log("clicked Flight button");
                return <FlightForm />
            case "Hotels":
                return <HotelForm />
            case "Tours":
                return <TourForm />
            default:

                return null;

        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.tabContainer}>
                <Tabs
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                >
                    <Tab className={classes.tabItems} onClick={() => this.onMenuItemClick("Tours")} label="Tour Packages" />
                    <Tab className={classes.tabItems} onClick={() => this.onMenuItemClick("Hotels")} label="Hotels" />
                    <Tab className={classes.tabItems} onClick={() => this.onMenuItemClick("Flights")} label="Flights" />
                </Tabs>

                {this.getForm()}
            </Paper>

        );
    }
}

export default withStyles(styles)(TabContainer);
