import React, { useState, useEffect } from "react";

import classes from "./Step1.module.css";

import DatePicker from "../../../components/DatePicker/DatePicker";
import RoomPicker from "../../../components/RoomPicker/RoomPicker";

const Step1 = ({ checkinDate, checkoutDate, incrementStepHandler }) => {
  const [availableRooms, setAvailableRooms] = useState([]);

  const checkDates = (checkinDate, checkoutDate) => {
    // API call to backend...
    // Set available rooms...
    setAvailableRooms([
      { type: "single", totalPrice: 60, numberOfNights: 3, availableRooms: 3 },
    ]);
  };

  useEffect(() => {
    checkDates(1, 2);
  }, []);

  return (
    <div className={classes.Step1}>
      <DatePicker
        className={classes.DatePicker}
        checkinDate={checkinDate}
        checkoutDate={checkoutDate}
        onSubmitHandler={checkDates}
      />
      <RoomPicker
        availableRooms={availableRooms}
        incrementStepHandler={incrementStepHandler}
      />
    </div>
  );
};

export default Step1;
