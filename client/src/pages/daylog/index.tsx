import type { NextPage } from "next";

import Calendar from "@components/calendar/Calendar";
import * as S from "./daylog.style";

const DaylogPage: NextPage = () => {
  return (
    <>
      <h2 css={S.title}>daylog</h2>
      <Calendar />
    </>
  );
};

export default DaylogPage;
