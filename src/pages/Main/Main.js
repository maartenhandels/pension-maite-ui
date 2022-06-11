import React from "react";

import classes from "./Main.module.css";

import ScrollUpArrow from "../../components/UI/ScrollUpArrow/ScrollUpArrow";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import NavBar from "../../components/NavBar/NavBar";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import PageTop from "../../containers/PageTop/PageTop";

const Main = () => {
  return (
    <>
      <ScrollUpArrow />
      <TopNavBar />
      <NavBar />
      <PageTop>
        <CarouselBanner />
      </PageTop>
    </>
  );
};

export default Main;
