import { FC } from "react";

import StyleProvider from "@components/provider/StyleProvider";
import useCloseAside from "./hooks/useCloseAside";
import Header from "./header/Header";
import Aside from "./aside/Aside";
import BlogAside from "./aside/BlogAside";
import Footer from "./footer/Footer";
import * as S from "./BlogLayout.style";

const BlogLayout: FC = ({ children }) => {
  const { asideRef, isShowAside, exceptRef } = useCloseAside();

  return (
    <StyleProvider>
      <Header ref={exceptRef} />
      <Aside ref={asideRef} isShowAside={isShowAside} />
      <BlogAside />
      <main css={S.main}>{children}</main>
      <Footer />
    </StyleProvider>
  );
};

export default BlogLayout;
