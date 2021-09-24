import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 352px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  color: ${(props) => props.theme.primary};
`;

export const TopFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 50%;
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 50%;
`;

export const FooterItem = styled.div`
  margin-left: 12px;
  text-align: center;
`;

export const LanguageButton = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

export const ThemeButton = styled.div`
  cursor: pointer;
`;

export const Languages = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100px;
  margin-left: 50px;
`;

export const LanguageSelectButton = styled.div`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.secondary};
    `}
`;
