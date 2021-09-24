export default function validateForm(
  email,
  password,
  confirmedPassword,
  setEmailError,
  setPasswordError
) {
  let emailWarning;
  let passwordWarning;
  let error;

  if (
    !email.includes("@") ||
    email.split("@")[0].length < 1 ||
    email.split("@")[1].length < 1
  ) {
    emailWarning = "invalid email";
    error = true;
  }

  if (password.length < 6) {
    passwordWarning = "Password too short";
    error = true;
  }
  if (confirmedPassword && password !== confirmedPassword) {
    passwordWarning = "Passwords must match";
    error = true;
  }
  setEmailError(emailWarning);
  setPasswordError(passwordWarning);
  return error;
}
