import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import FormButton from "../../components/FormButton/FormButton";
import AnchorLink from "../../components/AnchorLink/AnchorLink";
import AnchorContainer from "../../components/AnchorContainer/AnchorContainer";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import FormFooter from "../../components/FormFooter/FormFooter";
import FormContainer from "../../components/FormContainer/FormContainer";
import Header from "../../components/Header/Header";
import ErrorText from "../../components/ErrorText/ErrorText";
import api from "../../helpers/api";
import validateForm from "../../helpers/validateForm";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [genericError, setGenericError] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    setGenericError("");
    const error = validateForm(
      email,
      password,
      repeatedPassword,
      setEmailError,
      setPasswordError
    );
    if (!error) {
      try {
        const result = await api(
          "https://my-json-server.typicode.com/kidsloop-test/accounts/sign-up",
          "patch",
          { email, password }
        );
        console.log(result.data.id);
      } catch (e) {
        setGenericError("Error signing up, please try again.");
      }
    }
    setLoading(false);
  };

  return (
    <FormContainer>
      <Header>Sign In</Header>
      {genericError && <ErrorText>{genericError}</ErrorText>}
      <TextInput
        type="text"
        autoComplete="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <ErrorText>{emailError}</ErrorText>}
      <TextInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Repeat password"
        value={repeatedPassword}
        onChange={(e) => setRepeatedPassword(e.target.value)}
      />
      {passwordError && <ErrorText>{passwordError}</ErrorText>}
      <FormFooter>
        <AnchorContainer>
          <AnchorLink to="/forgot-password" label="Forgot your password?" />
        </AnchorContainer>
        <ButtonContainer>
          <FormButton onClick={() => signUp()} loading={loading}>
            Sign Up
          </FormButton>
        </ButtonContainer>
      </FormFooter>
      <AnchorLink to="/login" label="Already a member? Login here" />
    </FormContainer>
  );
}
