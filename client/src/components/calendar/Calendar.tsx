import { FC } from "react";

import useCalendar from "./hooks/useCalendar";
import CalendarHeader from "./header/CalendarHeader";
import CalendarContent from "./content/CalendarContent";
import * as S from "./Calendar.style";

const Calendar: FC = () => {
  const {
    monthYear,
    selectedDate,
    changePrevMonthYear,
    changeNextMonthYear,
    selectDate,
  } = useCalendar();
  return (
    <article css={S.wrapper}>
      <h3 className="a11y">calendar</h3>
      <CalendarHeader
        monthYear={monthYear}
        selectedDate={selectedDate}
        changePrevMonthYear={changePrevMonthYear}
        changeNextMonthYear={changeNextMonthYear}
      />
      <div css={S.container}>
        <CalendarContent
          monthYear={monthYear}
          selectedDate={selectedDate}
          selectDate={selectDate}
        />
      </div>
    </article>
  );
};

export default Calendar;
