import styled from "styled-components";

export const InputStyled = styled.input.attrs({
  placeholder: "codertao",
  bColor: "red",
  type: "text",
})`
  background-color: lightblue;
  border-color: ${(props) => props.bColor};
  color: ${(props) => props.color};
`;

export const ButtonStyled = styled.button`
  padding: 10px, 20px;
  color: orange;
  font-size: 50px;
`;
export const InheritanceStyled = styled(ButtonStyled)`
  background-color: yellow;
`;
export const H2Styled = styled.h2`
  color: ${(props) => props.theme.themeColor};
  font-size: ${(props) => props.theme.fontSize};
`;
