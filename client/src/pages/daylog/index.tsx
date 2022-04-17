import type { NextPage } from "next";

import AppLayout from "@components/layout/AppLayout";
import Calendar from "@components/calendar/Calendar";
import * as S from "./daylog.style";

const DaylogPage: NextPage = () => {
  return (
    <AppLayout>
      <section>
        <h2 css={S.title}>daylog</h2>
        <Calendar />
      </section>
    </AppLayout>
  );
};

export default DaylogPage;
