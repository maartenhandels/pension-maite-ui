import React from "react";

import classes from "./Main.module.css";

import Page from "../../containers/Page/Page";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import DatePicker from "../../components/DatePicker/DatePicker";
import About from "../../components/About/About";

const Main = () => {
  return (
    <Page>
      <CarouselBanner />
      <DatePicker />
      <About />
    </Page>
  );
};

export default Main;
