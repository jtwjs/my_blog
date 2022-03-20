import React, { forwardRef } from "react";

import Nav from "@components/layout/nav/Nav";
import DarkModeSwitch from "@components/darkModeSwitch/DarkModeSwitch";
import { DOM_ID } from "@utils/constants";
import * as S from "./Aside.style";

type AsideProps = {
  isShowAside: boolean;
};

const Aside = forwardRef<HTMLElement, AsideProps>(({ isShowAside }, ref) => {
  return (
    <aside
      css={(theme) => S.wrapper(theme, { isShowAside })}
      id={DOM_ID.sidebar}
      ref={ref}
    >
      <Nav css={S.navBar} />
      <DarkModeSwitch css={S.darkSwitch} />
    </aside>
  );
});

export default Aside;
