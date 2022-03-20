import React, { forwardRef } from "react";
import Link from "next/link";

import Nav from "@components/layout/nav/Nav";
import DarkModeSwitch from "@components/darkModeSwitch/DarkModeSwitch";
import SearchBar from "./searchBar/SearchBar";
import MenuButton from "./menuButton/MenuButton";
import * as S from "./Header.style";

const Header = forwardRef<HTMLElement>((props, ref) => {
  return (
    <header css={S.header} ref={ref}>
      <MenuButton css={S.menuBtn} />
      <div css={S.container}>
        <h1 css={S.title}>
          <Link href="/">
            <a>Woong BLOG</a>
          </Link>
        </h1>
        <div css={S.links}>
          <SearchBar css={S.searchBar} />
          <Nav css={S.navBar} />
          <DarkModeSwitch css={S.darkSwitch} />
        </div>
      </div>
    </header>
  );
});

export default Header;
