import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    device: {
      desktop: string;
      tablet: string;
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
      white: string;
      border: string;
      text_base: string;
      text_gray: string;
    };
    zindex: {
      header: number;
      aside: number;
      main: number;
      footer: number;
      modal: number;
    };
  }
}
