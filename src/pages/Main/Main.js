import React from "react";

import classes from "./Main.module.css";

import ScrollUpArrow from "../../components/UI/ScrollUpArrow/ScrollUpArrow";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import NavBar from "../../components/NavBar/NavBar";
import PageTop from "../../containers/PageTop/PageTop";
import Content from "./Content/Content";

const Main = () => {
  return (
    <>
      <ScrollUpArrow />
      <TopNavBar />
      <NavBar />
      <PageTop>
        <Content />
      </PageTop>
    </>
  );
};

export default Main;
