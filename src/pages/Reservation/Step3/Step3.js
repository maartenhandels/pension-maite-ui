import React from "react";

import classes from "./Step3.module.css";

import ReservationSummary from "../../../components/ReservationSummary/ReservationSummary";

const Step3 = () => {
  // Dummy Data
  const reservationData = {
    reservationCode: 1002,
    checkinDate: "2022-07-25",
    checkoutDate: "2022-07-27",
    totalPrice: 60,
    rooms: [
      {
        type: "double",
        quantity: 1,
      },
    ],
  };
  return (
    <ReservationSummary
      reservationData={reservationData}
      className={classes.ReservationSummary}
    />
  );
};

export default Step3;
