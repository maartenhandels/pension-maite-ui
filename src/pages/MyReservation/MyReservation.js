import React, { useState } from "react";

import classes from "./MyReservation.module.css";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import MyReservationForm from "../../components/MyReservationForm/MyReservationForm";
import ReservationSummary from "../../components/ReservationSummary/ReservationSummary";
import Content from "../../containers/Content/Content";
import PopUpMessage from "../../components/UI/PopUpMessage/PopUpMessage";

const MyReservation = () => {
  const [reservationData, setReservationData] = useState();
  const [error, setError] = useState("");

  const onPopUpClose = () => {
    setError("");
  };

  return (
    <Page>
      <PageHeader>Mi Reserva</PageHeader>
      <Content className={classes.Content}>
        {!reservationData && (
          <MyReservationForm
            setReservationDataHandler={setReservationData}
            setErrorHandler={setError}
          />
        )}
        {reservationData && (
          <ReservationSummary
            className={classes.MyReservationSummary}
            confirmationData={reservationData}
          />
        )}
        {error.length > 0 && (
          <PopUpMessage
            type="error"
            text={error}
            onCloseHandler={onPopUpClose}
          />
        )}
      </Content>
    </Page>
  );
};

export default MyReservation;
