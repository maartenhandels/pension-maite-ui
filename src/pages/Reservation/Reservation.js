import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import classes from "./Reservation.module.css";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/PageHeader/PageHeader";
import ReservationProgressBar from "../../components/ReservationProgressBar/ReservationProgressBar";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";

const Reservation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [reservationData, setReservationData] = useState();

  const incrementStep = (data) => {
    setReservationData(data);
    setStep(step + 1);
    console.log(data);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  return (
    <Page hideBookBtn={true}>
      <PageHeader>Reservas</PageHeader>

      <ReservationProgressBar currentStep={step} />
      {step === 1 && (
        <Step1
          checkinDate={state ? state.checkinDate : ""}
          checkoutDate={state ? state.checkoutDate : ""}
          incrementStepHandler={incrementStep}
        />
      )}

      {step === 2 && (
        <Step2
          reservationData={reservationData}
          decrementStepHandler={decrementStep}
        />
      )}
    </Page>
  );
};

export default Reservation;
