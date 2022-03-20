import { FC } from "react";
import dayjs from "dayjs";

import { MonthYear } from "@type/index";
import PrevButton from "@components/button/prevButton/PrevButton";
import NextButton from "@components/button/nextButton/NextButton";
import * as S from "./CalendarHeader.style";

type CalendarHeaderProps = {
  monthYear: MonthYear;
  selectedDate: dayjs.Dayjs;
  changePrevMonthYear: () => void;
  changeNextMonthYear: () => void;
};

const CalendarHeader: FC<CalendarHeaderProps> = ({
  monthYear,
  selectedDate,
  changePrevMonthYear,
  changeNextMonthYear,
}) => {
  return (
    <header css={S.header}>
      <div css={S.navigation}>
        <PrevButton label="이전 달" onClick={changePrevMonthYear} />
        <NextButton label="다음 달" onClick={changeNextMonthYear} />
      </div>
      <div>
        <span css={S.year}>{monthYear.year}</span>
        <time css={S.date}>{selectedDate.format("D")}</time>
        <span css={S.day}>{monthYear.dayOfWeek}</span>
        <span css={S.month}>{monthYear.monthName}</span>
      </div>
    </header>
  );
};

export default CalendarHeader;
