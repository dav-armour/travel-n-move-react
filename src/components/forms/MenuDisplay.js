import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FlightForm from "./FlightForm";
import FlightForm2 from "./FlightForm2";
// import HotelForm from "./HotelForm";
import TourForm from "./TourForm";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  bannerStyle: {
    backgroundImage: 'url("./london-eye.jpg")',
    minHeight: "500px",
    width: "100%",
    paddingTop: "100px"
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

class FormTabs extends React.Component {
  state = {
    value: 2,
    itemOption: "Tours"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Paper className={classes.tabContainer}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab className={classes.tabItems} label="Tour Packages" />
          <Tab className={classes.tabItems} label="Hotels" />
          <Tab className={classes.tabItems} label="Flights" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <TourForm />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <FlightForm2 />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <FlightForm />
          </TabContainer>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(FormTabs);
