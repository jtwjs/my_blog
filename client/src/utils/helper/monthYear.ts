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
  const firstDOW = Number(startDate.format("d"));
  const lastDate = Number(startDate.clone().endOf("month").format("DD"));
  const monthName = startDate.format("MMMM");
  const prevMonthLastDate = Number(
    startDate.clone().subtract(1, "month").endOf("month").format("DD")
  );

  return {
    startDate,
    firstDOW,
    lastDate,
    monthName,
    dayOfWeek,
    date,
    month,
    year,
    prevMonthLastDate,
  };
};

export const getNewMonthYear = (
  prevData: MonthYear,
  monthIncrement: number
): MonthYear => {
  const newMonthYear = getUpdatedMonthYear(prevData, monthIncrement);

  return getMonthYearDetails(newMonthYear);
};
