export default function(values) {
  const errors = {};
  const requiredFields = [
    "ticketType",
    "origin",
    "destination",
    "email",
    "notes"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
}
