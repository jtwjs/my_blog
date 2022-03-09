import React, { FC } from "react";

import { navItems } from "@assets/static/nav";
import NavItem from "./navItem/NavItem";
import * as S from "./Nav.style";

type NavProps = {
  className?: string;
};

const Nav: FC<NavProps> = ({ className }) => {
  return (
    <nav css={S.wrapper} className={className}>
      <ul css={S.list}>
        {navItems.map(({ link, label, external = false }) => (
          <NavItem key={label} link={link} label={label} external={external} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
