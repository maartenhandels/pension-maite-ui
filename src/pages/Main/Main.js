import React from "react";

import classes from "./Main.module.css";

import ScrollUpArrow from "../../components/UI/ScrollUpArrow/ScrollUpArrow";
import TopNavBar from "../../components/TopNavBar/TopNavBar";

const Main = () => {
  return (
    <>
      <ScrollUpArrow />
      <TopNavBar />
    </>
  );
};

export default Main;
