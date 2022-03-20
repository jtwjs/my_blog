import dayjs from "dayjs";

import { MonthYear } from "@type/index";

export const getUpdatedMonthYear = (
  monthYear: MonthYear,
  monthIncrement: number
): dayjs.Dayjs => {
  return monthYear.startDate.clone().add(monthIncrement, "months");
};

export const getMonthYearDetails = (initialDate: dayjs.Dayjs): MonthYear => {
  const month = initialDate.format("MM");
  const year = initialDate.format("YYYY");
  const date = initialDate.format("DD");
  const dayOfWeek = initialDate.format("dddd");
  const startDate = dayjs(`${year}${month}01`);
  const prevMonthStartDate = startDate.clone().subtract(1, "month");
  const nextMonthStartDate = startDate.clone().add(1, "month");
  const firstDOW = Number(startDate.format("d"));
  const lastDate = Number(startDate.clone().endOf("month").format("DD"));
  const monthName = startDate.format("MMMM");
  const prevMonthLastDate = Number(
    prevMonthStartDate.endOf("month").format("DD")
  );
  const firstWeekPrevMonthDate = prevMonthStartDate.set(
    "date",
    prevMonthLastDate - firstDOW + 1
  );

  return {
    startDate,
    prevMonthStartDate,
    nextMonthStartDate,
    firstDOW,
    lastDate,
    monthName,
    dayOfWeek,
    date,
    month,
    year,
    prevMonthLastDate,
    firstWeekPrevMonthDate,
  };
};

export const getNewMonthYear = (
  prevData: MonthYear,
  monthIncrement: number
): MonthYear => {
  const newMonthYear = getUpdatedMonthYear(prevData, monthIncrement);

  return getMonthYearDetails(newMonthYear);
};
