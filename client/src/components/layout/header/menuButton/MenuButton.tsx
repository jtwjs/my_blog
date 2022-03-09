import React, { FC } from "react";
import { useRecoilState } from "recoil";

import asideToggleAtom from "@recoil/asideToggle/index";
import { DOM_ID } from "@utils/constants";
import MenuIcon from "@assets/icons/ic_menu.svg";
import * as S from "./MenuButton.style";

type MenuButtonProps = {
  className?: string;
};

const MenuButton: FC<MenuButtonProps> = ({ className }) => {
  const [isShowAside, setIsShowAside] = useRecoilState(asideToggleAtom);
  const handleShowAside = (): void => {
    setIsShowAside((prev: boolean) => !prev);
  };

  return (
    <button
      type="button"
      css={S.wrapper}
      className={className}
      aria-label="사이드 메뉴 열기"
      aria-controls={DOM_ID.sidebar}
      aria-expanded={isShowAside}
      onClick={handleShowAside}
    >
      <MenuIcon />
    </button>
  );
};

export default MenuButton;
