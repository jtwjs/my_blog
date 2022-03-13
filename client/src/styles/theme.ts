import { Theme } from "@emotion/react";

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}

const userCalcRem = (size: number): string => `${size / 10}rem`;

const breakpoint = {
  lg: 1200,
  md: 768,
};

const device = {
  desktop: `(min-width: ${breakpoint.lg}px)`,
  tablet: `(min-width: ${breakpoint.md}px)`,
};

const fontSize = {
  xs: userCalcRem(12),
  small: userCalcRem(14),
  base: userCalcRem(16),
  lg: userCalcRem(18),
  xl: userCalcRem(21),
  xxl: userCalcRem(23),
  titleSize: userCalcRem(48),
  subTitleSize: userCalcRem(32),
};

const zindex = {
  header: 200,
  aside: 100,
  main: 50,
  footer: 80,
  modal: 500,
};

const light: Theme = {
  device,
  fontSize,
  zindex,
  color: {
    primary: "#6aada4",
    black: "#191A20",
    white: "#FFF",
    darkGray: "#222",
    bg_primary: "#FFF",
    bg_secondary: "#FFF",
    border: "#eaecef",
    text_title: "#24292f",
    text_base: "#2c3e50",
    text_gray: "#ccc",
    icon: "#191A20",
  },
};

const dark: Theme = {
  device,
  fontSize,
  zindex,
  color: {
    primary: "#6aada4",
    black: "#191A20",
    white: "#FFF",
    darkGray: "#222",
    bg_primary: "#1C2128",
    bg_secondary: "#2D333B",
    border: "#444c56",
    text_title: "#adbac7",
    text_base: "#768390",
    text_gray: "#ccc",
    icon: "#FFF",
  },
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
