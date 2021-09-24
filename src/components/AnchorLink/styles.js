import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
  margin-top: 12px;
`;
