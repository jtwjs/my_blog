import { Theme } from "@emotion/react";

const userCalcRem = (size: number): string => `${size / 10}rem`;

const breakpoint = {
  lg: 1200,
  md: 768,
};

const theme: Theme = {
  device: {
    desktop: `(min-width: ${breakpoint.lg}px)`,
    tablet: `(min-width: ${breakpoint.md}px)`,
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
    primary: "#6aada4",
    black: "#191A20",
    white: "#FFF",
    darkGray: "#222",
    border: "#eaecef",
    text_base: "#2c3e50",
    text_gray: "#ccc",
  },
  zindex: {
    header: 200,
    aside: 100,
    main: 50,
    footer: 80,
    modal: 500,
  },
};

export default theme;
