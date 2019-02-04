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
  if (!values.image || values.image.length === 0) {
    errors.image = "Required";
  }
  return errors;
};

export default validate;
