import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection, WrapperFooter, Copyright } from "./styles";

function Footer() {
  return (
    <StyledSection as="footer">
      <WrapperFooter>
        <Logo />
        <Copyright>Создано 2025 React</Copyright>
      </WrapperFooter>
    </StyledSection>
  );
}

export default Footer;
