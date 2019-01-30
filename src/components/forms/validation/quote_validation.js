const validate = ({ destination, start_date, end_date, adults, children }) => {
  const errors = {};
  const start_date_parsed = new Date(start_date);
  const end_date_parsed = new Date(end_date);
  const now_date = new Date();

  if (!destination) {
    errors.destination = "Arrival airport is required";
  }

  if (start_date_parsed < now_date) {
    errors.start_date = "Invalid date";
  }

  if (end_date_parsed < now_date || end_date_parsed < start_date_parsed) {
    errors.end_date = "Invalid date";
  }

  if (adults < 1) {
    errors.adults = "Invalid";
  }

  if (children < 0) {
    errors.children = "Invalid";
  }

  return errors;
};

export default validate;
