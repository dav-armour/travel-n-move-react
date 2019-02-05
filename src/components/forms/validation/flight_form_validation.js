import validateQuote from "./quote_validation";

const validate = ({ origin, ...common_fields }) => {
  const errors = validateQuote(common_fields);

  if (!origin) {
    errors.origin = "Required";
  }

  return errors;
};

export default validate;
