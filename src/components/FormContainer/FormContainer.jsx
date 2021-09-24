import { Container, Image } from "./styles";
import logo from "../../images/logo.svg";

export default function FormContainer({ children }) {
  return (
    <Container>
      <Image src={logo} alt="Kidsloop logo" />
      {children}
    </Container>
  );
}
