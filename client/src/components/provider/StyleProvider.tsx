import { FC } from "react";
import { ThemeProvider } from "@emotion/react";

import useTheme from "@hooks/useTheme";
import globalStyles from "@styles/global";
import Theme from "@styles/theme";

const StyleProvider: FC = ({ children }) => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={Theme[theme]}>
      {globalStyles}
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
