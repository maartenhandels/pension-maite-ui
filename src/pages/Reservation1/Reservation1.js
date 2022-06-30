import React from "react";

import classes from "./Reservation1.module.css";

import DatePicker from "../../components/DatePicker/DatePicker";
import PageHeader from "../../components/PageHeader/PageHeader";
import ReservationProgressBar from "../../components/ReservationProgressBar/ReservationProgressBar";
import Page from "../../containers/Page/Page";
import RoomPicker from "../../components/RoomPicker/RoomPicker";

const Reservation1 = () => {
  return (
    <Page hideBookBtn={true}>
      <PageHeader>Reservas</PageHeader>
      <div className={classes.Content}>
        <ReservationProgressBar />
        <DatePicker className={classes.DatePicker} />
        <RoomPicker />
      </div>
    </Page>
  );
};

export default Reservation1;
