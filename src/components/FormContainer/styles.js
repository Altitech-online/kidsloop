import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  box-shadow: 0 0 20px 5px ${(props) => props.theme.cardDropShadow};
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.card};
`;

export const Image = styled.img`
  align-self: flex-start;
  height: 60px;
`;
