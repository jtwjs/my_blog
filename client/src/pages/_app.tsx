import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";

import AppLayout from "@components/layout/AppLayout";
import globalStyles from "@styles/global";
import theme from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
