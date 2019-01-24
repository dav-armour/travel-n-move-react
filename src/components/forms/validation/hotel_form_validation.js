//const validate = ({ origin, destination, start_date, end_date }) => {

const validate = ({ destination, start_date, end_date }) => {
  const errors = {};


  if (!destination) {
    errors.destination = "Destination city is required";
  }

  if (start_date < new Date()) {
    errors.start_date = "Invalid check in date";
  }

  if (end_date < new Date() || end_date < start_date) {
    errors.end_date = "Invalid check out date";
  }

  return errors;
};

export default validate;
