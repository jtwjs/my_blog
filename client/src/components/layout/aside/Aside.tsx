import React, { FC } from "react";

import Nav from "@components/layout/nav/Nav";
import * as S from "./Aside.style";

const Aside: FC = () => {
  return (
    <aside css={S.wrapper}>
      <Nav css={S.navBar} />
    </aside>
  );
};

export default Aside;
