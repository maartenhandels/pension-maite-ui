import React from "react";

import classes from "./Content.module.css";

import CarouselBanner from "../../../components/CarouselBanner/CarouselBanner";
import DatePicker from "../../../components/DatePicker/DatePicker";
import About from "./About/About";

const Content = () => {
  return (
    <>
      <CarouselBanner />
      <DatePicker />
      <About />
    </>
  );
};

export default Content;
