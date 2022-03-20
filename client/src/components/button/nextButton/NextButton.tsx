import { FC } from "react";

import NextIcon from "@assets/icons/ic_next.svg";
import * as S from "./NextButton.style";

type NextButtonProps = {
  className?: string;
  label: string;
  onClick: () => void;
};

const NextButton: FC<NextButtonProps> = ({ className, label, onClick }) => {
  return (
    <button
      css={S.wrapper}
      type="button"
      className={className}
      aria-label={label}
      onClick={onClick}
    >
      <NextIcon />
    </button>
  );
};

export default NextButton;
