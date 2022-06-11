import React from "react";

import classes from "./Content.module.css";

import CarouselBanner from "../../../components/CarouselBanner/CarouselBanner";
import DatePicker from "../../../components/DatePicker/DatePicker";

const Content = () => {
  return (
    <>
      <CarouselBanner />
      <DatePicker />
    </>
  );
};

export default Content;
