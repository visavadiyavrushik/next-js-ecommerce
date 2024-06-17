import Header from "@/components/header";
import React from "react";

const Mainlayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Mainlayout;
