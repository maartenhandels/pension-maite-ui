import React from "react";

import classes from "./HomePage.module.css";

import Page from "../../containers/Page/Page";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import DatePicker from "../../components/DatePicker/DatePicker";
import About from "../../components/About/About";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const checkAvailability = (checkinDate, checkoutDate) => {
    console.log(checkinDate);
    console.log(checkoutDate);
    navigate("/book", {
      state: { checkinDate: checkinDate, checkoutDate: checkoutDate },
    });
  };

  return (
    <Page>
      <CarouselBanner />
      <DatePicker
        className={classes.DatePicker}
        onSubmitHandler={checkAvailability}
      />
      <About />
    </Page>
  );
};

export default HomePage;
