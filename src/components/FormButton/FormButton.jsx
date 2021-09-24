import { Button } from "./styles";
import PulseLoader from "react-spinners/PulseLoader";

export default function FormButton({ onClick, children, loading }) {
  return (
    <Button onClick={onClick}>
      {loading ? <PulseLoader size={8} color="#fff" /> : children}
    </Button>
  );
}
