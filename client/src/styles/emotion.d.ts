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
      subTitleSize: string;
    };
    color: {
      primary: string;
      black: string;
      white: string;
      orange: string;
      border: string;
      bg_primary: string;
      bg_secondary: string;
      darkGray: string;
      text_title: string;
      text_base: string;
      text_gray: string;
      text_reflection: string;
      text_reverseReflection: string;
      disabled: string;
      icon: string;
      calendar_sat: string;
      calendar_sun: string;
    };
    zindex: {
      header: number;
      aside: number;
      main: number;
      footer: number;
      modal: number;
    };
    boxShadow: {
      primary: string;
      secondary: string;
      project: string;
    };
  }
}
