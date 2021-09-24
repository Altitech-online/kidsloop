import { Input } from "./styles";

export default function TextInput({
  type,
  autoComplete,
  placeholder,
  onChange,
}) {
  return (
    <Input
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
