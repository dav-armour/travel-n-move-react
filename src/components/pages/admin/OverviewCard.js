import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  content: {
    paddingTop: 0
  }
});

class OverviewCard extends Component {
  render() {
    const { classes, rows, title, updatedAt, avatarStyle } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label={title} style={avatarStyle}>
              {title[0]}
            </Avatar>
          }
          title={title}
          subheader={`Last Updated - ${updatedAt}`}
        />
        <CardContent className={classes.content}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell align="right">Qty</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.status}
                  </TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

OverviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OverviewCard);
