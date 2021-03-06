import dayjs from "dayjs";

export interface MonthYear {
  startDate: dayjs.Dayjs;
  prevMonthStartDate: dayjs.Dayjs;
  nextMonthStartDate: dayjs.Dayjs;
  firstWeekPrevMonthDate: dayjs.Dayjs;
  firstDOW: number;
  lastDate: number;
  prevMonthLastDate: number;
  monthName: string;
  dayOfWeek: string;
  date: string;
  month: string;
  year: string;
}
