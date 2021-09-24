import styled from "styled-components";

export const Input = styled.input`
  width: auto;
  height: 40px;
  border-radius: 15px;
  padding-left: 15px;
  margin-top: 12px;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.inputBorder};
  background-color: transparent;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.themelabelText};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.themelabelText};
  }
`;
