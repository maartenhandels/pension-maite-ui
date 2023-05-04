import React from "react";

import classes from "./Step3.module.css";

import ReservationSummary from "../../../components/ReservationSummary/ReservationSummary";

const Step3 = ({ confirmationData }) => {
  return (
    <ReservationSummary
      confirmationData={confirmationData}
      className={classes.ReservationSummary}
    />
  );
};

export default Step3;
