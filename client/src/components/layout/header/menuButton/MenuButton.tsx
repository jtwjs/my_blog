import React, { FC } from "react";

import MenuIcon from "@assets/icons/ic_menu.svg";
import * as S from "./MenuButton.style";

type MenuButtonProps = {
  className?: string;
};

const MenuButton: FC<MenuButtonProps> = ({ className }) => {
  const handleOpenSide = () => {
    console.log("open");
  };

  return (
    <button
      type="button"
      css={S.wrapper}
      className={className}
      aria-label="사이드 메뉴 열기"
      onClick={handleOpenSide}
    >
      <MenuIcon />
    </button>
  );
};

export default MenuButton;
