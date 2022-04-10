import type { NextPage } from "next";

import Calendar from "@components/calendar/Calendar";
import * as S from "./daylog.style";

const DaylogPage: NextPage = () => {
  return (
    <section>
      <h2 css={S.title}>daylog</h2>
      <Calendar />
    </section>
  );
};

export default DaylogPage;
