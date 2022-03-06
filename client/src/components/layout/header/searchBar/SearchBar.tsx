import React, { FC } from "react";

import SearchBarIcon from "@assets/icons/ic_search.svg";
import * as S from "./SearchBar.style";

type SearchBarProps = {
  className?: string;
};

const SEARCH_BAR_ID = "search-input";

const SearchBar: FC<SearchBarProps> = ({ className, ...restProps }) => {
  return (
    <div css={S.wrapper} className={className}>
      <label className="a11y" htmlFor={SEARCH_BAR_ID}>
        검색
      </label>
      <SearchBarIcon css={S.searchIcon} />
      <input type="text" id={SEARCH_BAR_ID} css={S.searchBar} {...restProps} />
    </div>
  );
};

export default SearchBar;
