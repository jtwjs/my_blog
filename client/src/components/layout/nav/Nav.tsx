import { FC } from "react";

import { navItems } from "@assets/static/nav";
import NavItem from "./navItem/NavItem";
import * as S from "./Nav.style";

type NavProps = {
  className?: string;
};

const Nav: FC<NavProps> = ({ className }) => (
  <nav css={S.wrapper} className={className}>
    <ul css={S.list}>
      {navItems.map(({ path, label }) => (
        <NavItem key={label} path={path} label={label} />
      ))}
    </ul>
  </nav>
);

export default Nav;
