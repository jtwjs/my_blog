import React, { FC } from "react";

import useTheme from "@hooks/useTheme";
import * as S from "./DarkModeSwitch.style";

const DARK_SWITCH_ID = "dark-switch";

type DarkModeSwitchProps = {
  className?: string;
};

const DarkModeSwitch: FC<DarkModeSwitchProps> = ({ className }) => {
  const [theme, toggleTheme] = useTheme();

  const handleEnter = (e: React.Keyboard<HTMLLabelElement>): void => {
    e.keyCode === 13 && toggleTheme();
  };

  return (
    <label
      css={S.wrapper}
      className={className}
      htmlFor={DARK_SWITCH_ID}
      tabIndex={0}
      onKeyDown={handleEnter}
    >
      <span className="a11y">다크모드 토글 버튼</span>
      <input
        id={DARK_SWITCH_ID}
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div css={S.planet} />
      <div css={S.elements}>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
        <svg
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </svg>
      </div>
    </label>
  );
};

export default DarkModeSwitch;
