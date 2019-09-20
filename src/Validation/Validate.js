
const validateSignup = (values) => {
  let errors = {};
  if (!values.fullnames) {
    errors.fullnames = 'full names are required';
  }
  else if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  } else if (!values.password) {
    errors.password = 'password is required';
  } else if (values.password.length <= 4) {
    errors.password = 'password should be greater than 4';
  }
  else if (!values.username) {
    errors.username = 'username is required';
  } else if (!values.telephone) {
    errors.telephone = 'telephone is required';
  }
  return errors;
}

export { validateSignup };
