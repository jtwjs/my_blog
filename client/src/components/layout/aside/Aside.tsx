import React, { forwardRef } from "react";

import Nav from "@components/layout/nav/Nav";
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
    </aside>
  );
});

export default Aside;
