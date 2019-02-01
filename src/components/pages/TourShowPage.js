import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getTour } from "./../../actions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import classes from "*.module.sass";

const styles = theme => ({
  bannerStyle: {
    //background: 'url("./london-eye.jpg") no-repeat center center',
    //backgroundSize: "cover",
    height: "auto",
    width: "100%"
    //padding: "50px 0"
  },

  mainContainer: {
    maxWidth: "1300px",
    margin: "0 auto"
  },

  bannerImageWrapper: {
    maxHeight: "400px",
    overflow: "hidden"
  },
  tourTitle: {
    textAlign: "center",
    fontSize: "30px",
    padding: "10px 0"
  },
  descriptionWrapper: {
    padding: "20px",
    textAlign: "justify"
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  priceAndStartingFrom: {
    height: "72px",
    width: "292px",
    border: "1px solid red",
    margin: "0 auto"
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

    console.log("from componentDidMount", tour);

    return (
      <div className={classes.mainContainer}>
        <div className={classes.bannerImageWrapper}>
          <img
            src={tour.image}
            alt="photo not found"
            className={classes.bannerStyle}
          />
        </div>

        <div className={classes.tourTitle}>
          <Typography component="h2" variant="display3" gutterBottom>
            {tour.title}
          </Typography>
        </div>
        <div className={classes.priceAndStartingFrom} />
        <div className={classes.descriptionWrapper}>
          <Typography variant="body2" gutterBottom>
            {tour.description}
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>
        <div className={classes.buttonWrapper}>
          <Button size="small" color="secondary" variant="outlined">
            Request Quote
          </Button>
        </div>
      </div>
    );

    // ) <div>ID: {this.props.match.params.id}</div>;
  }
}

const mapStateToProps = state => {
  return {
    tour: state.tour
  };
};

// export default connect(
//   mapStateToProps,
//   { getTour }
// )(TourShowPage);

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getTour }
  )(TourShowPage)
);
