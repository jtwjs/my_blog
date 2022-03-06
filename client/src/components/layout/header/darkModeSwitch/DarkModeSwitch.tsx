import React, { FC, useState } from "react";

import * as S from "./DarkModeSwitch.style";

const DARK_SWITCH_ID = "dark-switch";

const DarkModeSwitch: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLLabelElement>): void => {
    e.keyCode === 13 && handleToggleSwitch();
  };

  return (
    <label
      css={S.wrapper}
      htmlFor={DARK_SWITCH_ID}
      tabIndex={0}
      onKeyDown={handleEnter}
    >
      <span className="a11y">다크모드 토글 버튼</span>
      <input
        id={DARK_SWITCH_ID}
        type="checkbox"
        checked={isDarkMode}
        onChange={handleToggleSwitch}
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
