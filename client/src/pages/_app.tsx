import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

import AppLayout from "@components/layout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>JTW Blog</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </RecoilRoot>
  );
}

export default MyApp;
