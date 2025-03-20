import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-height: 60px;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: 700;
  line-height: 58px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 40px 60px rgba(94, 98, 236, 0.2) inset;
  padding: 0 24px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.buttonColorHoverActive};
    box-shadow: 0px 0px 40px 60px rgba(94, 98, 236, 0.2) inset;
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
