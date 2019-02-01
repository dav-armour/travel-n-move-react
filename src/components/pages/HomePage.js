import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CardsGrid from "../modules/CardsGrid";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";
import QuoteFormTabs from "./../modules/QuoteFormTabs";

const styles = theme => ({
  formContainer: {
    maxWidth: "1024px",
    marginLeft: "80px"
  }
});

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <HeroImage imageLink={"./london-eye.jpg"}>
          <div className={classes.formContainer}>
            <QuoteFormTabs />
          </div>
        </HeroImage>
        <MiddleBanner />
        <CardsGrid query={{ featured: true }} />
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
