import validateQuote from "./quote_validation";

const validate = ({ origin, destination, start_date, end_date }) => {
  const errors = validateQuote({ destination, start_date, end_date });

  if (!origin) {
    errors.origin = "Departure airport is required";
  }

  return errors;
};

export default validate;
