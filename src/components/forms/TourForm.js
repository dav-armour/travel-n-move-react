import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import QuillEditor from "./fields/QuillEditor";
import ReduxCheckbox from "./fields/ReduxCheckbox";
import ReduxTextField from "./fields/ReduxTextField";
import validate from "./validation/tour_form_validation";
import { createOrUpdateTour, getTour, setTour } from "./../../actions";

class TourForm extends Component {
  onFormSubmit = formValues => {
    const { createOrUpdateTour, match } = this.props;
    const { _id } = match.params;
    formValues.image = formValues.image[0];
    let formData = new FormData();
    for (let key in formValues) {
      formData.append(key, formValues[key]);
    }
    createOrUpdateTour(_id, formData);
  };

  componentDidMount() {
    const { match, getTour, setTour } = this.props;
    const { id } = match.params;
    if (id) {
      getTour(id);
    } else {
      setTour({});
    }
  }

  render() {
    const { tour_id, handleSubmit } = this.props;
    return (
      <div style={{ padding: "50px 0px" }}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8}>
            <Paper style={{ padding: "12px 24px 24px" }}>
              {tour_id ? (
                <Typography variant="h3" gutterBottom>
                  Edit Existing Tour
                </Typography>
              ) : (
                <Typography variant="h3" gutterBottom>
                  Create New Tour
                </Typography>
              )}
              <form onSubmit={handleSubmit(this.onFormSubmit)}>
                <div>
                  <Field
                    type="text"
                    name="title"
                    label="Title"
                    component={ReduxTextField}
                    margin="dense"
                    style={{ marginTop: 0 }}
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="summary"
                    label="Summary (max 100 characters)"
                    component={ReduxTextField}
                    margin="dense"
                    inputProps={{ maxLength: "100" }}
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="duration"
                    label="Duration"
                    component={ReduxTextField}
                    margin="dense"
                  />
                </div>
                <div>
                  <Field
                    type="number"
                    name="price"
                    label="Starting From Price"
                    component={ReduxTextField}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Rs</InputAdornment>
                      )
                    }}
                  />
                </div>
                <div>
                  <Field
                    name="image"
                    type="file"
                    label="Featured Image"
                    component={ReduxTextField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                  />
                </div>
                <div>
                  <Field
                    name="featured"
                    label="Feature on home page"
                    component={ReduxCheckbox}
                    margin="dense"
                  />
                </div>
                <div>
                  {/* <Typography variant="h5" gutterBottom>
                    Description
                  </Typography> */}
                  <InputLabel>Description</InputLabel>
                  <Field
                    name="description"
                    component={QuillEditor}
                    placeholder={"Write description..."}
                  />
                </div>
                <div style={{ marginTop: 18 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                  >
                    Save
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const WrappedTourForm = reduxForm({
  form: "TourForm",
  enableReinitialize: true,
  validate
})(TourForm);

const mapStateToProps = state => {
  const { _id, ...initialValues } = state.tour;
  return {
    initialValues,
    tour_id: _id
    // initialValues: {
    //   title: "",
    //   image: "",
    //   summary: "",
    //   description: "",
    //   description:
    //     "<h1>Heading</h1><h2>subheading</h2><p>dfsdfsdfsdfsadfs</p><p>dsfadfsdfsadsfadsf</p><ol><li>test</li><li>this</li><li>out</li></ol><p><br></p>",
    //   price: 0,
    //   featured: false
    // }
  };
};

export default connect(
  mapStateToProps,
  { createOrUpdateTour, getTour, setTour }
)(withRouter(WrappedTourForm));
