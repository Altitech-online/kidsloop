import { Link } from "./styles";

export default function AnchorLink({ to, label }) {
  return <Link to={to}>{label}</Link>;
}
