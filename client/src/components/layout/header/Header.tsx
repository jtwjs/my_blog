import React, { FC } from "react";
import Link from "next/link";

import SearchBar from "./searchBar/SearchBar";
import Nav from "./nav/Nav";
import DarkModeSwitch from "./darkModeSwitch/DarkModeSwitch";
import * as S from "./Header.style";

const Header: FC = () => {
  return (
    <header css={S.header}>
      <div css={S.container}>
        <h1 css={S.title}>
          <Link href="/">
            <a>Tae Woong BLOG</a>
          </Link>
        </h1>
        <div css={S.links}>
          <SearchBar css={S.searchBar} />
          <Nav />
          <DarkModeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
