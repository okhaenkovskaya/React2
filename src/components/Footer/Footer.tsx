import style from "./Footer.module.scss";

import { NavList, NavItem } from "../Nav";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <NavList classes={style.footerMenu}>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/">Posts</NavItem>
        <NavItem to="/">Contact</NavItem>
      </NavList>
      <p className={style.copyright}>
        Copyright {year} Prokopenko. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
