import React, { FC } from "react";

import { navItems } from "@assets/static/nav";
import NavItem from "./navItem/NavItem";
import * as S from "./Nav.style";

const Nav: FC = () => {
  return (
    <nav css={S.wrapper}>
      <ul css={S.list}>
        {navItems.map(({ link, label, external = false }) => (
          <NavItem key={label} link={link} label={label} external={external} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
