import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: relative;
  width: ${(props) => props.theme.pageWidth};
  height: ${(props) => props.theme.headerHeight};
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0 auto;
  z-index: 5;
`;
