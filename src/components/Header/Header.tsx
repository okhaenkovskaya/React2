import Logo from "./Logo";
import Button from "../Button/Button";
import { NavList, NavItem } from "../Nav";

import style from "./Header.module.scss";

const navList = [
  {
    id: 1,
    name: "About",
    path: "/about",
  },
  {
    id: 2,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 3,
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className={style.header}>
      <Logo to="/" classes={style.logo} />

      <NavList>
        {navList.map(({ id, name, path }) => (
          <NavItem key={id} to={path}>
            {name}
          </NavItem>
        ))}
      </NavList>

      <div className={style.btnWrap}>
        <Button>Button text</Button>
        <Button to="/contact">Contact</Button>
      </div>
    </header>
  );
};

export default Header;
