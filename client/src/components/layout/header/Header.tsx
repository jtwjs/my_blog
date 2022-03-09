import React, { FC } from "react";
import Link from "next/link";

import Nav from "@components/layout/nav/Nav";
import SearchBar from "./searchBar/SearchBar";
import DarkModeSwitch from "./darkModeSwitch/DarkModeSwitch";
import MenuButton from "./menuButton/MenuButton";
import * as S from "./Header.style";

const Header: FC = () => {
  return (
    <header css={S.header}>
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
};

export default Header;
