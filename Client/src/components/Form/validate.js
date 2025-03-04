export default function validate({ inputs }) {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{6,10}$/;

  if (!regexEmail.test(inputs.email)) {
    errors.email = "Name must be a valid email address";
  }
  if (!inputs.email) {
    errors.email = "You must enter a valid username";
  }

  if (inputs.email.length > 35) {
    errors.email = "Username max length 35 characters";
  }

  if (!regexPassword.test(inputs.password)) {
    errors.password =
      "Password must have: at least 3 and max 10 characters & one number";
  }
  return errors;
}
