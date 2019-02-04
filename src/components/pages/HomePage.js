import React, { Component } from "react";
import CardsGrid from "../modules/CardsGrid";
import HeroImage from "./../modules/HeroImage";
import MiddleBanner from "./../modules/MiddleBanner";
import QuoteFormTabs from "./../modules/QuoteFormTabs";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeroImage imageLink={"./londonEye.jpg"} height={"740px"}>
          <QuoteFormTabs />
        </HeroImage>
        <MiddleBanner />
        <CardsGrid query={{ featured: true }} />
      </div>
    );
  }
}

export default HomePage;
