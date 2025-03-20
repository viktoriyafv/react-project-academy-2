import styled from "styled-components";
import { Section, Wrapper } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: ${(props) => props.theme.pageWidth};
  min-height: 79px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0;
  margin: 0 auto;
`;

export const WrapperFooter = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.theme.pageWidth};
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const Copyright = styled.span`
  min-width: 148px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  vertical-align: middle;
  text-align: right;
`;
