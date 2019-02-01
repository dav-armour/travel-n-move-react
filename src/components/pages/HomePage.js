import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CardsGrid from "../modules/CardsGrid";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";
import QuoteFormTabs from "./../modules/QuoteFormTabs";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage imageLink={"./london-eye.jpg"}>
          <QuoteFormTabs />
        </HeroImage>
        <MiddleBanner />
        <CardsGrid query={{ featured: true }} />
      </div>
    );
  }
}

export default HomePage;
