import { FC } from "react";

import NextIcon from "@assets/icons/ic_next.svg";
import * as S from "./NextButton.style";

type NextButtonProps = {
  className?: string;
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

const NextButton: FC<NextButtonProps> = ({
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
      <NextIcon />
    </button>
  );
};

export default NextButton;
