import React, { useState } from "react";

import classes from "./MyReservation.module.css";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import MyReservationForm from "../../components/MyReservationForm/MyReservationForm";
import ReservationSummary from "../../components/ReservationSummary/ReservationSummary";
import Content from "../../containers/Content/Content";

const MyReservation = () => {
  const [reservationData, setReservationData] = useState();

  return (
    <Page>
      <PageHeader>Mi Reserva</PageHeader>
      <Content className={classes.Content}>
        {!reservationData && (
          <MyReservationForm setReservationDataHandler={setReservationData} />
        )}
        {reservationData && (
          <ReservationSummary confirmationData={reservationData} />
        )}
      </Content>
    </Page>
  );
};

export default MyReservation;
