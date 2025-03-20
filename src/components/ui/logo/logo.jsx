import React from "react";
import logo from "/src/assets/logo.svg";
import { Text, ImageLogo, StyledLogo, StyledLogoMainPage } from "./styles";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <ImageLogo src={logo} alt="логотип" />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <ImageLogo src={logo} alt="логотип" />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
