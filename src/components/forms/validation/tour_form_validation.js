const validate = (values = {}) => {
  const errors = {};
  const requiredFields = [
    "title",
    "summary",
    "price",
    "duration",
    "description"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  return errors;
};

export const validateImage = value =>
  !value || value.length === 0 ? "Required" : undefined;

export default validate;
