import React, { Component } from "react";
import HeroImage from "./../modules/HeroImage";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  aboutUsWrapper: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    alignItems: "center"
  },
  photoWrapper: {
    height: "50px",
    width: "40px",
    border: "1px solid red"
  },
  contentWrapper: {
    border: "1px solid red"
  },
  paperWrapper: {
    display: "flex",
    width: "70%",
    justifyContent: "flex-start",
    marginBottom: "40px",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center"
    }
  },
  photo: {
    minWidth: "220px",
    maxWidth: "220px",
    padding: "20px"
  },
  aboutUs: {
    paddingTop: "10px"
  },
  content: {
    padding: "10px 20px 0 20px",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      textAlign: "justify",
      padding: "20px"
    }
  }
});

class AboutUsPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <HeroImage imageLink="./londonEye.jpg" height={"40vh"} />
        <div className={classes.aboutUsWrapper}>
          <Typography
            component="h2"
            variant="display3"
            className={classes.titleText}
            gutterBottom
            className={classes.aboutUs}
          >
            About Us
          </Typography>

          <Paper className={classes.paperWrapper}>
            <div>
              <img
                src="./Deepak1.png"
                alt="Deepak Sharma's Photo"
                className={classes.photo}
              />
            </div>
            <div className={classes.content}>
              <Typography variant="body2" gutterBottom>
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
              </Typography>
              <p />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AboutUsPage);
