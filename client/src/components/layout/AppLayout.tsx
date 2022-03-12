import React, { FC } from "react";

import useCloseAside from "./hooks/useCloseAside";
import Header from "./header/Header";
import Aside from "./aside/Aside";
import Footer from "./footer/Footer";
import * as S from "./AppLayout.style";

const AppLayout: FC = ({ children }) => {
  const { asideRef, isShowAside, exceptRef } = useCloseAside();

  return (
    <>
      <Header ref={exceptRef} />
      <Aside ref={asideRef} isShowAside={isShowAside} />
      <main css={S.main}>
        <section css={S.container}>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
