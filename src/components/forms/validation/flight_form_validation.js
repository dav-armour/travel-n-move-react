const validate = ({ origin, destination, start_date, end_date }) => {
  const errors = {};

  if (!origin) {
    errors.origin = "Departure airport is required";
  }

  if (!destination) {
    errors.destination = "Destination airport is required";
  }

  if (start_date < new Date()) {
    errors.start_date = "Invalid date";
  }

  if (end_date < new Date() || end_date < start_date) {
    errors.end_date = "Invalid date";
  }

  return errors;
};

export default validate;
