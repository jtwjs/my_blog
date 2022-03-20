import { useState, useCallback, useEffect } from "react";
import dayjs from "dayjs";

import { getMonthYearDetails, getNewMonthYear } from "@utils/helper/monthYear";

const useCalendar = () => {
  const currentMonthYear = getMonthYearDetails(dayjs());

  const [monthYear, setMonthYear] = useState(currentMonthYear);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(dayjs());

  const changePrevMonthYear = useCallback(() => {
    setMonthYear((prevData) => getNewMonthYear(prevData, -1));
  }, []);

  const changeNextMonthYear = useCallback(() => {
    setMonthYear((prevData) => getNewMonthYear(prevData, 1));
  }, []);

  const selectDate = useCallback((date: dayjs.Dayjs) => {
    setSelectedDate(date);
  }, []);

  useEffect(() => {
    setSelectedDate(monthYear.startDate);
  }, [monthYear]);

  return {
    monthYear,
    selectedDate,
    changePrevMonthYear,
    changeNextMonthYear,
    selectDate,
  };
};

export default useCalendar;
