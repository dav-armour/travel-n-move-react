import validateQuote from "./quote_validation";

const validate = ({ budget_tier, ...common_fields }) => {
  const errors = validateQuote({ ...common_fields });

  const allowed_budgets = ["budget", "mid-range", "luxury"];
  if (allowed_budgets.includes(budget_tier)) {
    errors.budget_tier = "Invalid";
  }

  return errors;
};

export default validate;
