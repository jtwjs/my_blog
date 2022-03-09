import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@emotion/react";

import AppLayout from "@components/layout/AppLayout";
import globalStyles from "@styles/global";
import theme from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <RecoilRoot>
        <Head>
          <title>JTW Blog</title>
        </Head>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
