import React, { Component } from "react";
import HeroImage from "./../modules/HeroImage";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// import classes from "*.module.css";

const styles = theme => ({
  aboutUsWrapper: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    border: "1px solid black",
    alignItems: "center"
  },
  photoWrapper: {
    height: "50px",
    width: "40px",
    border: "1px solid red"
  },
  contentWrapper: {
    // height: "50px",
    // width: "40px",
    border: "1px solid red"
  },
  paperWrapper: {
    display: "flex",
    width: "80%",
    // flexDirection: "row",
    justifyContent: "flex-start",
    border: "1px solid red",
    height: "200px",
    marginBottom: "40px"
  },
  photo: {
    float: "left"
  }
});

class AboutUsPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <HeroImage imageLink="./londonEye.jpg" height={"40vh"} />
        <div className={classes.aboutUsWrapper}>
          <div>
            <p>About Us</p>
          </div>

          <Paper className={classes.paperWrapper}>
            <div className={classes.photo}>
              <p>photo here</p>
            </div>
            <div className={classes.content}>
              <p>
                Mr. Deepak Sharma is an Entrepreneur. He is a well-qualified
                &amp; has management experience in industries like insurance,
                facility, overseas education. He lived in New Zealand, a
                beautiful tourist destination for more than 5 years. The
                experience of living in a tourist attraction has enlightened him
                to venture in to travel in business in India. His plan is to
                provide customized tour plan as per client need. Because tour
                &amp; travel is for all ages for children &amp; student fun,
                history &amp; culture where for youngster tracking, water sports
                explore new places for middle age people &amp; newly married it
                is family tour at hill station for relaxation &amp; make
                memories as young couple, for aged to recall the memories, visit
                at religious place or medical travel (few treatment are very
                pocket friendly in Chennai). So it can be any reason for
                spending time at separate place.
              </p>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsPage);

// export default withStyles(styles)(
//   connect(
//   mapStateToProps,
//   { getTour }
//   )(TourShowPage)
//   );
