import Generator from "./generator";
import { CurrentTheme } from "@type/index";

const { matches } = window.matchMedia("(prefers-color-scheme: dark)");

export const currentThemeStorage = new Generator<CurrentTheme>(
  "currentTheme",
  matches ? "dark" : "light"
);
