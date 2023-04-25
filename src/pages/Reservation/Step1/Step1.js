import React, { useState, useEffect } from "react";

import classes from "./Step1.module.css";

import DatePicker from "../../../components/DatePicker/DatePicker";
import RoomPicker from "../../../components/ReservationItems/RoomPicker/RoomPicker";

const Step1 = ({
  availableRoomTypes,
  numberOfNights,
  reservationData,
  incrementStepHandler,
  getAvailableRoomTypesHandler,
  setReservationDataHandler,
}) => {
  console.log("Inside Step 1: " + reservationData.checkinDate);
  return (
    <>
      <DatePicker
        className={classes.DatePicker}
        checkinDate={reservationData.checkinDate}
        checkoutDate={reservationData.checkoutDate}
        onSubmitHandler={getAvailableRoomTypesHandler}
      />
      <RoomPicker
        availableRooms={availableRoomTypes}
        numberOfNights={numberOfNights}
        incrementStepHandler={incrementStepHandler}
        reservationData={reservationData}
        setReservationDataHandler={setReservationDataHandler}
      />
    </>
  );
};

export default Step1;
