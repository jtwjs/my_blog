import React, { FC } from "react";

import Header from "./header/Header";
import Aside from "./aside/Aside";

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Aside />
      {children}
    </>
  );
};

export default AppLayout;
