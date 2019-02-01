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
import EnquirieDetailsDialog from "./../forms/EnquiryDetailsDialog";
import {
  getEnquiries,
  setEnquiry,
  setEnquiryDetailsDialogOpen,
  setTableSettings
} from "./../../actions";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
};

class EnquiriesTable extends Component {
  componentDidMount() {
    const { getEnquiries } = this.props;
    getEnquiries();
  }

  toggleDialogOpen = enquiryDetails => {
    const { setEnquiry, setEnquiryDetailsDialogOpen } = this.props;
    setEnquiry(enquiryDetails);
    setEnquiryDetailsDialogOpen(true);
  };

  onChangePage = (event, page) => {
    const { getEnquiries, setTableSettings } = this.props;
    setTableSettings({ page });
    getEnquiries();
  };

  onChangeRowsPerPage = event => {
    const { getEnquiries, setTableSettings } = this.props;
    setTableSettings({ rowsPerPage: event.target.value });
    getEnquiries();
  };

  render() {
    const { classes, enquiries, total, page, rowsPerPage } = this.props;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, total - page * rowsPerPage);

    return (
      <>
        <EnquirieDetailsDialog />
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Date Received</TableCell>
                <TableCell>Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {enquiries.map(enquiry => {
                const {
                  _id,
                  status,
                  first_name,
                  last_name,
                  subject,
                  createdAt,
                  updatedAt
                } = enquiry;
                return (
                  <Fragment key={_id}>
                    <TableRow
                      hover
                      style={{ cursor: "pointer" }}
                      onClick={() => this.toggleDialogOpen(enquiry)}
                    >
                      <TableCell>
                        {status[0].toUpperCase() + status.substr(1)}
                      </TableCell>
                      <TableCell>{first_name}</TableCell>
                      <TableCell>{last_name}</TableCell>
                      <TableCell>{subject.substr(0, 30)}</TableCell>
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

EnquiriesTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { enquiries, table_settings } = state;
  const { page, rowsPerPage } = table_settings;
  return {
    enquiries: enquiries.enquiries,
    total: enquiries.total,
    page,
    rowsPerPage
  };
};

export default connect(
  mapStateToProps,
  { getEnquiries, setEnquiry, setEnquiryDetailsDialogOpen, setTableSettings }
)(withStyles(styles)(EnquiriesTable));
