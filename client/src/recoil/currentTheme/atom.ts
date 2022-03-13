import { atom } from "recoil";

import { CurrentTheme } from "@type/index";

const currentTheme = atom<CurrentTheme>({
  key: "currentTheme",
  default: "light",
});

export default currentTheme;
