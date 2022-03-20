import { FC } from "react";
import dayjs from "dayjs";

import * as S from "./Date.style";

type DateProps = {
  className?: string;
  date: dayjs.Dayjs;
  isSelectedDate?: boolean;
  disabled?: boolean;
  selectDate: (date: dayjs.Dayjs) => void;
};

const Date: FC<DateProps> = ({
  className,
  date,
  isSelectedDate = false,
  disabled,
  selectDate,
}) => {
  const isToday = dayjs().isSame(date, "d");

  return (
    <li css={S.wrapper} className={className}>
      <button
        css={(theme) => S.date(theme, { isSelectedDate })}
        type="button"
        aria-current={isToday ? "date" : "false"}
        aria-selected={isSelectedDate}
        disabled={disabled}
        onClick={() => selectDate(date)}
      >
        <span>{date.format("D")}</span>
      </button>
    </li>
  );
};

export default Date;
