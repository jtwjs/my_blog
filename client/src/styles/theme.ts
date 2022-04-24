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
  subTitleSize: userCalcRem(32),
  titleSize: userCalcRem(48),
};

const zindex = {
  header: 200,
  aside: 100,
  main: 50,
  footer: 150,
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
    orange: "#ff9f5e",
    darkGray: "#222",
    bg_primary: "#FFF",
    bg_secondary: "#FFF",
    border: "#eaecef",
    text_title: "#24292f",
    text_base: "#2c3e50",
    text_gray: "#a5a5a5",
    text_reflection: "#FFF",
    text_reverseReflection: "#191A20",
    icon: "#191A20",
    disabled: "#B9BDC5",
    calendar_sat: "#006ab5",
    calendar_sun: "#FF0B0B",
  },
  boxShadow: {
    primary: "5px 5px 15px #f2f2f2, -5px -5px 15px #ffffff;",
    secondary: "inset 5px 5px 15px #f7f7f7, inset -5px -5px 15px #ffffff;",
    project: "5px 5px 5px -2px rgba(25, 26, 32, 0.2);",
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
    orange: "#ff9f5e",
    darkGray: "#222",
    bg_primary: "#1C2128",
    bg_secondary: "#2D333B",
    border: "#444c56",
    text_title: "#adbac7",
    text_base: "#768390",
    text_gray: "#ccc",
    text_reflection: "#191A20",
    text_reverseReflection: "#FFF",
    icon: "#FFF",
    disabled: "#777",
    calendar_sat: "#006ab5",
    calendar_sun: "#FF0B0B",
  },
  boxShadow: {
    primary: "10px 10px 20px #1a1e25,-10px -10px 20px #1e242b",
    secondary: "inset 8px 8px 17px #1b1f26, inset -8px -8px 17px #1d232a",
    project: "5px 5px 5px -2px rgba(204, 204, 204, 0.2);",
  },
};

const mode: ThemeGroup = {
  light,
  dark,
};

export default mode;
