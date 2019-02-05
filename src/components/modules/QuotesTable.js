import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import QuoteDetailsDialog from "./../forms/QuoteDetailsDialog";
import {
  getQuotes,
  setQuote,
  setQuoteDetailsDialogOpen,
  setTableSettings
} from "../../actions";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
};

class QuotesTable extends Component {
  componentDidMount() {
    const { getQuotes } = this.props;
    getQuotes();
  }

  toggleDialogOpen = quoteDetails => {
    const { setQuote, setQuoteDetailsDialogOpen } = this.props;
    setQuote(quoteDetails);
    setQuoteDetailsDialogOpen(true);
  };

  onChangePage = (event, page) => {
    const { getQuotes, setTableSettings } = this.props;
    setTableSettings({ page });
    getQuotes();
  };

  onChangeRowsPerPage = event => {
    const { getQuotes, setTableSettings } = this.props;
    setTableSettings({ rowsPerPage: event.target.value });
    getQuotes();
  };

  render() {
    const { classes, quotes, total, page, rowsPerPage } = this.props;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, total - page * rowsPerPage);

    return (
      <>
        <QuoteDetailsDialog />
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Quote Type</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Date Received</TableCell>
                <TableCell>Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quotes.map(quote => {
                const { _id, type, createdAt, updatedAt, status } = quote;
                const { first_name, last_name } = quote.user;
                return (
                  <Fragment key={_id}>
                    <TableRow
                      hover
                      style={{ cursor: "pointer" }}
                      onClick={() => this.toggleDialogOpen(quote)}
                    >
                      <TableCell>
                        {status[0].toUpperCase() + status.substr(1)}
                      </TableCell>
                      <TableCell>{type}</TableCell>
                      <TableCell>{first_name}</TableCell>
                      <TableCell>{last_name}</TableCell>
                      <TableCell>
                        {new Date(Date.parse(createdAt)).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {new Date(Date.parse(updatedAt)).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  </Fragment>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 30, 40, 50].filter(n => n <= total)}
            component="div"
            count={total}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.onChangePage}
            onChangeRowsPerPage={this.onChangeRowsPerPage}
          />
        </Paper>
      </>
    );
  }
}

QuotesTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { quotes, table_settings } = state;
  const { page, rowsPerPage } = table_settings;
  return {
    quotes: quotes.quotes,
    total: quotes.total,
    page,
    rowsPerPage
  };
};

export default connect(
  mapStateToProps,
  { getQuotes, setQuote, setQuoteDetailsDialogOpen, setTableSettings }
)(withStyles(styles)(QuotesTable));
