import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledOrder = styled(Section)`
  position: absolute;
  max-width: ${(props) => props.theme.pageWidth};
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  background-color: ${(props) => props.theme.backgroundColorGray};
  border-radius: 6px;
  padding-top: 40px;
  padding-bottom: 0;
`;
