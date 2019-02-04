import validateQuote from "./quote_validation";

const validate = ({ budget, ...common_fields }) => {
  const errors = validateQuote(common_fields);

  const allowed_budgets = ["affordable", "premium", "luxury"];
  if (!allowed_budgets.includes(budget)) {
    errors.budget = "Invalid";
  }

  return errors;
};

export default validate;
