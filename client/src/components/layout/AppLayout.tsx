import React, { FC } from "react";

import Header from "./header/Header";
import Aside from "./aside/Aside";
import Footer from "./footer/Footer";
import * as S from "./AppLayout.style";

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Aside />
      <main css={S.main}>
        <section css={S.container}>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
