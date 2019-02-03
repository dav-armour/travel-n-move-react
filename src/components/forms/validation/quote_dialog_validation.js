import validateHoliday from "./holiday_form_validation";
import validatePersonalInfo from "./personal_info_validation";

const validate = ({ user, ...otherDetails }) => {
  const errors = {
    ...validateHoliday(otherDetails),
    user: { ...validatePersonalInfo(user) }
  };
  return errors;
};

export default validate;
