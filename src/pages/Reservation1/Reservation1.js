import React, { useState, useEffect } from "react";

import classes from "./Reservation1.module.css";

import DatePicker from "../../components/DatePicker/DatePicker";
import PageHeader from "../../components/PageHeader/PageHeader";
import ReservationProgressBar from "../../components/ReservationProgressBar/ReservationProgressBar";
import Page from "../../containers/Page/Page";
import RoomPicker from "../../components/RoomPicker/RoomPicker";
import { useLocation } from "react-router-dom";

const Reservation1 = () => {
  const { state } = useLocation();
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
    <Page hideBookBtn={true}>
      <PageHeader>Reservas</PageHeader>
      <div className={classes.Content}>
        <ReservationProgressBar />
        <DatePicker
          className={classes.DatePicker}
          checkinDate={state ? state.checkinDate : ""}
          checkoutDate={state ? state.checkoutDate : ""}
          onSubmitHandler={checkDates}
        />
        <RoomPicker availableRooms={availableRooms} />
      </div>
    </Page>
  );
};

export default Reservation1;
