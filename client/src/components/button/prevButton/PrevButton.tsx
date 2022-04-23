import { FC } from "react";

import PrevIcon from "@assets/icons/ic_prev.svg";
import * as S from "./PrevButton.style";

type PrevButtonType = {
  className?: string;
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const PrevButton: FC<PrevButtonType> = ({
  className,
  label,
  disabled,
  onClick,
}) => {
  return (
    <button
      css={S.wrapper}
      type="button"
      className={className}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      <PrevIcon />
    </button>
  );
};

export default PrevButton;
