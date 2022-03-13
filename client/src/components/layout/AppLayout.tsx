import { FC } from "react";
import { ThemeProvider } from "@emotion/react";

import useTheme from "@hooks/useTheme";
import useCloseAside from "./hooks/useCloseAside";
import Header from "./header/Header";
import Aside from "./aside/Aside";
import Footer from "./footer/Footer";
import * as S from "./AppLayout.style";
import globalStyles from "@styles/global";
import Theme from "@styles/theme";

const AppLayout: FC = ({ children }) => {
  const [theme] = useTheme();
  const { asideRef, isShowAside, exceptRef } = useCloseAside();

  return (
    <ThemeProvider theme={Theme[theme]}>
      {globalStyles}
      <Header ref={exceptRef} />
      <Aside ref={asideRef} isShowAside={isShowAside} />
      <main css={S.main}>
        <section css={S.container}>{children}</section>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default AppLayout;
