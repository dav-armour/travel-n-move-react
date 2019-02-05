import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { setQuote, setQuoteDetailsDialogOpen } from "./../../actions";

const styles = theme => ({
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    paddingBottom: 8
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});

class TourCard extends Component {
  onCardClick = () => {
    const { _id } = this.props;
    this.props.history.push(`/tours/${_id}`);
  };

  onQuoteClick = event => {
    const { title, summary, setQuote, setQuoteDetailsDialogOpen } = this.props;
    setQuote({
      type: "Holiday",
      destination: title,
      client_comments: `REQUESTING TOUR PACKAGE\nTitle: ${title}\nSummary: ${summary}`,
      adults: 1,
      children: 0,
      budget: "affordable"
    });
    setQuoteDetailsDialogOpen(true);
    event.stopPropagation();
  };

  render() {
    const { classes, summary, title, image, price } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={this.onCardClick}>
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title={title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {summary}
            </Typography>
            <Typography variant="subtitle2">
              Starting from Rs {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={this.onCardClick}>
            Learn More
          </Button>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={this.onQuoteClick}
          >
            Request Quote
          </Button>
        </CardActions>
      </Card>
    );
  }
}

TourCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default connect(
  null,
  { setQuote, setQuoteDetailsDialogOpen }
)(withStyles(styles)(withRouter(TourCard)));
