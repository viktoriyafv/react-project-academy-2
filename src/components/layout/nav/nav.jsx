import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { WrapperFooter } from "./styles";
import { useLocation } from "react-router-dom";

const links = [
  {
    to: AppRoute.MAIN,
    item: <Button link={AppRoute.MAIN}>Главная</Button>,
  },
  { to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button> },
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {links
        .filter((link) => link.to !== pageUrl)
        .map((link) => (
          <WrapperFooter key={link.to}>{link.item}</WrapperFooter>
        ))}
    </nav>
  );
}

export default Nav;
