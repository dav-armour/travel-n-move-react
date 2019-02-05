import validateQuote from "./quote_validation";

const validate = ({ num_stars, num_rooms, ...common_fields }) => {
  const errors = validateQuote(common_fields);

  if (!num_stars) {
    errors.num_stars = "Required";
  }

  if (num_stars < 1 || num_stars > 5) {
    errors.num_stars = "Invalid";
  }

  if (!num_rooms) {
    errors.num_rooms = "Required";
  }

  if (num_rooms < 1) {
    errors.num_rooms = "Invalid";
  }

  return errors;
};

export default validate;
