import { useState, useCallback, useEffect, useRef } from "react";
import dayjs from "dayjs";

import { getMonthYearDetails, getNewMonthYear } from "@utils/helper/monthYear";

const useCalendar = () => {
  const isMounted = useRef<boolean>(false);
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
    if (isMounted.current) {
      setSelectedDate(monthYear.startDate);
    }
    isMounted.current = true;
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
