import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.primary};
  color: #fff;
  cursor: pointer;
  border: 0px;
  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;
