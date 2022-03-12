import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { navItemInterface } from "@assets/static/nav";
import * as S from "./NavItem.style";

const NavItem: FC<navItemInterface> = ({ path, label, external }) => {
  const router = useRouter();
  const currentPage = router.pathname === path;

  return (
    <li css={S.wrapper}>
      {external ? (
        <a
          css={(theme) => S.link(theme, { isActive: currentPage })}
          href={path}
          target="_blank"
          rel="noopener"
        >
          <span>{label}</span>
        </a>
      ) : (
        <Link href={path}>
          <a
            css={(theme) => S.link(theme, { isActive: currentPage })}
            aria-current={currentPage ? "page" : "false"}
          >
            <span>{label}</span>
          </a>
        </Link>
      )}
    </li>
  );
};

export default NavItem;
