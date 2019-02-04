const validate = (values = {}) => {
  const errors = {};
  const requiredFields = [
    "first_name",
    "last_name",
    "email",
    "subject",
    "message"
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export default validate;
