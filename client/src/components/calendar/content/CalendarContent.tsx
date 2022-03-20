import { FC } from "react";
import dayjs from "dayjs";

import { MonthYear } from "@type/calendar";
import { dayOfWeek } from "@assets/static/calendar";
import Date from "./date/Date";
import * as S from "./CalendarContent.style";

type CalendarContentProps = {
  monthYear: MonthYear;
  selectedDate: dayjs.Dayjs;
  selectDate: (date: dayjs.Dayjs) => void;
};

const MAX_GRID_CELL = 42;

const CalendarContent: FC<CalendarContentProps> = ({
  monthYear,
  selectedDate,
  selectDate,
}) => {
  return (
    <div css={S.wrapper}>
      <ul css={S.week}>
        {dayOfWeek.map((day) => (
          <li key={day.label}>{day.label}</li>
        ))}
      </ul>
      <ul css={S.dateList}>
        {[...Array(monthYear.firstDOW)].map((_, i) => (
          <Date
            key={i}
            date={dayjs(
              `${monthYear.year}${monthYear.month}${
                monthYear.prevMonthLastDate - monthYear.firstDOW + 1 + i
              }`
            )}
            disabled
            selectDate={selectDate}
          ></Date>
        ))}
        {[...Array(monthYear.lastDate)].map((_, i) => (
          <Date
            key={i}
            date={dayjs(`${monthYear.year}${monthYear.month}${i + 1}`)}
            isSelectedDate={dayjs(
              `${monthYear.year}${monthYear.month}${i + 1}`
            ).isSame(selectedDate)}
            selectDate={selectDate}
          />
        ))}
        {[
          ...Array(MAX_GRID_CELL - (monthYear.firstDOW + monthYear.lastDate)),
        ].map((_, i) => (
          <Date
            key={i}
            date={dayjs(`${monthYear.year}${monthYear.month}${i + 1}`)}
            disabled
            selectDate={selectDate}
          />
        ))}
      </ul>
    </div>
  );
};

export default CalendarContent;
