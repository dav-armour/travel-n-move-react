import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
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
import Checkbox from "@material-ui/core/Checkbox";
import {
  getTours,
  setTableSettings,
  createOrUpdateTour,
  setSnackbarSettings
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

class ToursTable extends Component {
  componentDidMount() {
    const { getTours, page, rowsPerPage } = this.props;
    getTours({ page, rowsPerPage });
  }

  onRowClick = _id => {
    this.props.history.push(`/admin/tours/${_id}/edit`);
  };

  onChangePage = (event, page) => {
    const { getTours, setTableSettings, rowsPerPage } = this.props;
    setTableSettings({ page });
    getTours({ page, rowsPerPage });
  };

  onChangeRowsPerPage = event => {
    const rowsPerPage = event.target.value;
    const { getTours, setTableSettings, page } = this.props;
    setTableSettings({ rowsPerPage });
    getTours({ page, rowsPerPage });
  };

  onCheckboxClick = (event, tourDetails) => {
    event.stopPropagation();
    const { createOrUpdateTour } = this.props;
    tourDetails.featured = !tourDetails.featured;
    let formData = new FormData();
    for (let key in tourDetails) {
      formData.append(key, tourDetails[key]);
    }
    const _id = tourDetails._id;
    createOrUpdateTour(_id, formData);
  };

  render() {
    const { classes, tours, total, page, rowsPerPage } = this.props;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, total - page * rowsPerPage);

    return (
      <>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Featured</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Summary</TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell>Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tours.map(tour => {
                const {
                  _id,
                  featured,
                  title,
                  summary,
                  createdAt,
                  updatedAt
                } = tour;
                return (
                  <Fragment key={_id}>
                    <TableRow
                      hover
                      style={{ cursor: "pointer" }}
                      onClick={() => this.onRowClick(_id)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={featured}
                          onClick={event => this.onCheckboxClick(event, tour)}
                        />
                      </TableCell>
                      <TableCell>{title}</TableCell>
                      <TableCell>{summary.substr(0, 30)}</TableCell>
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

ToursTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { tours, table_settings } = state;
  const { page, rowsPerPage } = table_settings;
  return {
    tours: tours.tours,
    total: tours.total,
    page,
    rowsPerPage
  };
};

export default connect(
  mapStateToProps,
  { getTours, setTableSettings, createOrUpdateTour, setSnackbarSettings }
)(withRouter(withStyles(styles)(ToursTable)));
