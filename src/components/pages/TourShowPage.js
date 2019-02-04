import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import HeroImage from "./../modules/HeroImage";
import { getTour } from "./../../actions";

const styles = theme => ({
  contentContainer: {
    maxWidth: "1300px",
    margin: "0 auto",
    textAlign: "center"
  },

  tourTitle: {
    textAlign: "center",
    padding: "10px 0",
    margin: "0 auto"
  },
  titleText: {
    [theme.breakpoints.down(400)]: {
      fontSize: "2.5rem"
    }
  },
  priceText: {
    [theme.breakpoints.down(400)]: {
      fontSize: "1.5rem"
    }
  },
  durationText: {
    [theme.breakpoints.down(400)]: {
      fontSize: "1.5rem"
    }
  },
  descriptionWrapper: {
    padding: "20px",
    textAlign: "justify"
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px"
  },
  priceAndDurationWrapper: {
    height: "100px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center"
  },
  infoBox: {
    height: "100px",
    width: "50%"
  },
  startingFrom: {
    display: "flex",
    paddingLeft: "20px"
  },
  price: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "20px"
  },
  duration: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px"
  },
  durationSummary: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px"
  },
  rightBorder: {
    borderRight: "1px solid black"
  }
});

class TourShowPage extends Component {
  componentDidMount() {
    const { getTour, match } = this.props;
    const { id } = match.params;
    getTour(id);
  }

  render() {
    const { classes, tour } = this.props;

    return (
      <div>
        <HeroImage imageLink={tour.image} height={"40vh"} />
        <div className={classes.contentContainer}>
          <div className={classes.tourTitle}>
            <Typography
              component="h2"
              variant="h2"
              className={classes.titleText}
              gutterBottom
            >
              {tour.title}
            </Typography>
          </div>
          <div className={classes.priceAndDurationWrapper}>
            <div className={classNames(classes.infoBox, classes.rightBorder)}>
              <div className={classes.duration}>
                <Typography variant="h5" gutterBottom>
                  Duration
                </Typography>
              </div>
              <div className={classes.durationSummary}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.durationText}
                >
                  {tour.duration}
                </Typography>
              </div>
            </div>

            <div className={classes.infoBox}>
              <div className={classes.startingFrom}>
                <Typography variant="h5" gutterBottom>
                  Starting From
                </Typography>
              </div>
              <div className={classes.price}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.priceText}
                >
                  Rs. {tour.price}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.descriptionWrapper}>
            <Typography
              variant="body1"
              gutterBottom
              dangerouslySetInnerHTML={{ __html: tour.description }}
              className="tourDescriptionContent"
            />
          </div>
          <div className={classes.buttonWrapper}>
            <Button size="large" color="secondary" variant="outlined">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tour: state.tour
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getTour }
  )(TourShowPage)
);
