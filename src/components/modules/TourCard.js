import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  withStyles
  // createMuiTheme,
  // MuiThemeProvider
} from "@material-ui/core/styles";
// import green from "@material-ui/core/colors/green";

// const theme = createMuiTheme({
//   palette: {
//     primary: green
//   },
//   typography: {
//     useNextVariants: true
//   },
//   text: {
//     color: "white"
//   }
// });

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

function onCardClick(cardId) {
  console.log('Clicked card', cardId);
}

function TourCard(props) {
  const {
    classes,
    _id,
    description,
    title,
    image
  } = props;

  return (
    <Card className={classes.card} onClick={() => onCardClick(_id)}>
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          View
        </Button>
        <Button size="small" color="primary" variant="contained">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

TourCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default withStyles(styles)(TourCard);
