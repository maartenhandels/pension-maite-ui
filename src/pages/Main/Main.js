import React from "react";

import classes from "./Main.module.css";

import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import DatePicker from "../../components/DatePicker/DatePicker";
import About from "../../components/About/About";

const Main = () => {
  return (
    <>
      <CarouselBanner />
      <DatePicker />
      <About />
    </>
  );
};

export default Main;
