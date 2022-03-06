import { Theme } from "@emotion/react";

const userCalcRem = (size: number): string => `${size / 10}rem`;

const breakpoint = {
  desktop: 1920,
  tablet: 768,
  mobile: 480,
};

const theme: Theme = {
  device: {
    desktop: `(min-width: ${breakpoint.desktop}px)`,
    tablet: `(min-width: ${breakpoint.tablet}px)`,
    mobile: `(min-width: ${breakpoint.mobile}px)`,
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
    black: "#000",
    border: "#eaecef",
    text_base: "#2c3e50",
    text_gray: "#ccc",
  },
};

export default theme;
