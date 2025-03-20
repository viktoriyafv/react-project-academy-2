import styled from "styled-components";
import { Img, P } from "/src/components/styled";

export const Feature = styled.article`
  width: 540px;
  height: 100%;
  min-height: 197px;
  padding: 25px;
  background-color: ${(props) => (props.isNegative ? "#ede2ce" : "#ceede7")};
  border-radius: 8px;
`;

export const Image = styled(Img)`
  float: left;
  width: 56px;
  height: 56px;
  margin-right: 54px;
`;

export const Header = styled.header`
  display: flex;
  margin-bottom: ${(props) => props.theme.indent};
  text-align: left;
`;

export const Owner = styled.span`
  display: inline-block;
  min-height: 25px;
  font-size: 14px;
  line-height: 25px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.panelBackgroundColorDanger
      : props.theme.panelBackgroundColor};
  border-radius: 8px;
  padding: 4px 20px;
  margin-bottom: 7px;
  margin-left: ${(props) => props.indent};
`;

export const Text = styled(P)`
  text-align: left;
`;
