import { Theme } from "@emotion/react";

const userCalcRem = (size: number): string => `${size / 10}rem`;

const breakpoint = {
  desktop: 1440,
  tablet: 960,
  mobile: 768,
};

const theme: Theme = {
  device: {
    desktop: `(min-width: ${breakpoint.desktop}px)`,
    tablet: `(max-width: ${breakpoint.tablet}px)`,
    mobile: `(max-width: ${breakpoint.mobile}px)`,
  },
  fontSize: {
    xs: userCalcRem(12),
    small: userCalcRem(14),
    base: userCalcRem(16),
    lg: userCalcRem(18),
    xl: userCalcRem(21),
    xxl: userCalcRem(23),
    titleSize: userCalcRem(48),
  },
  color: {
    primary: "#0066ff",
    black: "#191A20",
    white: "#FFF",
    border: "#eaecef",
    text_base: "#2c3e50",
    text_gray: "#ccc",
  },
  zindex: {
    header: 200,
    nav: 100,
    main: 50,
    footer: 80,
    modal: 500,
  },
};

export default theme;
