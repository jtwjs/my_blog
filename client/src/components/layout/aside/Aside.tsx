import React, { FC } from "react";
import { useRecoilValue } from "recoil";

import Nav from "@components/layout/nav/Nav";
import asideToggleAtom from "@recoil/asideToggle";
import { DOM_ID } from "@utils/constants";
import * as S from "./Aside.style";

const Aside: FC = () => {
  const isShowAside = useRecoilValue(asideToggleAtom);

  return (
    <aside
      css={(theme) => S.wrapper(theme, { isShowAside })}
      id={DOM_ID.sidebar}
    >
      <Nav css={S.navBar} />
    </aside>
  );
};

export default Aside;
