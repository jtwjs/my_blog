import { useState, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";

import currentThemeAtom from "@recoil/currentTheme";

const useTheme = (): [typeof theme, typeof toggleTheme] => {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [theme, setTheme] = useRecoilState(currentThemeAtom);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    if (!isInitial) {
      const { currentThemeStorage } = require("@utils/storage");
      currentThemeStorage.save(theme);
    }
  }, [theme]);

  useEffect(() => {
    const { currentThemeStorage } = require("@utils/storage");
    setTheme(currentThemeStorage.load());
    setIsInitial(false);
  }, []);

  return [isInitial === true ? "light" : theme, toggleTheme];
};

export default useTheme;
