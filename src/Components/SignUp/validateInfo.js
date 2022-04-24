export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First name required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number required";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password confirmation required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
