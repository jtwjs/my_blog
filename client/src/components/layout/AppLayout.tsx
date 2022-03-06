import React, { FC } from "react";

import Header from "./header/Header";

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;
