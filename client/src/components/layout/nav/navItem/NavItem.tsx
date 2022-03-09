import React, { FC } from "react";
import Link from "next/link";

import * as S from "./NavItem.style";

type NavItemProps = {
  link: string;
  label: string;
  external: boolean;
};

const NavItem: FC<NavItemProps> = ({ link, label, external }) => (
  <li css={S.wrapper}>
    {external ? (
      <a css={S.link} href={link} target="_blank" rel="noopener">
        <span>{label}</span>
      </a>
    ) : (
      <Link href={link}>
        <a css={S.link}>
          <span>{label}</span>
        </a>
      </Link>
    )}
  </li>
);

export default NavItem;
