import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavMenu } from "@assets/static/nav";
import * as S from "./NavItem.style";

const NavItem: FC<NavMenu> = ({ path, label }) => {
  const router = useRouter();
  const currentPage = router.pathname === path;

  return (
    <li css={S.wrapper}>
      <Link href={path}>
        <a
          css={(theme) => S.link(theme, { isActive: currentPage })}
          aria-current={currentPage ? "page" : "false"}
        >
          <span>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
