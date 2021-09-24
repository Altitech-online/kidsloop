import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import FormButton from "../../components/FormButton/FormButton";
import AnchorLink from "../../components/AnchorLink/AnchorLink";
import AnchorContainer from "../../components/AnchorContainer/AnchorContainer";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import FormFooter from "../../components/FormFooter/FormFooter";
import FormContainer from "../../components/FormContainer/FormContainer";
import Header from "../../components/Header/Header";
import api from "../../helpers/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const resetPassword = async () => {
    setLoading(true);
    const result = await api(
      "https://my-json-server.typicode.com/kidsloop-test/accounts/reset-password",
      "post",
      { email }
    );
    console.log(result);
    setLoading(false);
  };
  return (
    <FormContainer>
      <Header>Forgotten Password</Header>

      <TextInput
        type="text"
        autoComplete="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormFooter>
        <AnchorContainer>
          <AnchorLink to="/login" label="Already a member? Login here" />
        </AnchorContainer>
        <ButtonContainer>
          <FormButton onClick={() => resetPassword()} loading={loading}>
            Reset Password
          </FormButton>
        </ButtonContainer>
      </FormFooter>
      <AnchorLink to="/signup" label="Create an account" />
    </FormContainer>
  );
}
