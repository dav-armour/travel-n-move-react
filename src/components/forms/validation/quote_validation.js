import moment from "moment";

const validate = (values = {}) => {
  const errors = {};
  const start_date_parsed = moment(values.start_date);
  const end_date_parsed = moment(values.end_date);
  const today = moment().startOf("day");

  const requiredFields = [
    "destination",
    "start_date",
    "end_date",
    "adults",
    "children"
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.children === 0) {
    delete errors.children;
  }

  if (start_date_parsed < today) {
    errors.start_date = "Invalid date";
  }

  if (end_date_parsed < today || end_date_parsed < start_date_parsed) {
    errors.end_date = "Invalid date";
  }

  if (values.adults < 1) {
    errors.adults = "Invalid";
  }

  if (values.children < 0) {
    errors.children = "Invalid";
  }

  return errors;
};

export default validate;
