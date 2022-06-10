import React from "react";

import classes from "./Main.module.css";

import ScrollUpArrow from "../../components/UI/ScrollUpArrow/ScrollUpArrow";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import NavBar from "../../components/NavBar/NavBar";

const Main = () => {
  return (
    <>
      <ScrollUpArrow />
      <TopNavBar />
      <NavBar />
    </>
  );
};

export default Main;
