import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    device: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    fontSize: {
      xs: string;
      small: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      titleSize: string;
    };
    color: {
      primary: string;
      black: string;
      border: string;
      text_base: string;
      text_gray: string;
    };
  }
}
