import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import ReservationProgressBar from "../../components/ReservationProgressBar/ReservationProgressBar";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Content from "../../containers/Content/Content";

const Reservation = () => {
  const { t } = useTranslation(null, { keyPrefix: "reservationPage" });

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
      <PageHeader>{t("pageHeader")}</PageHeader>

      <Content>
        <ReservationProgressBar currentStep={step} />

        {step === 1 && (
          <Step1
            checkinDate={state ? state.checkinDate : ""}
            checkoutDate={state ? state.checkoutDate : ""}
            incrementStepHandler={incrementStep}
            reservationData={reservationData}
          />
        )}

        {step === 2 && (
          <Step2
            reservationData={reservationData}
            incrementStepHandler={incrementStep}
            decrementStepHandler={decrementStep}
          />
        )}

        {step === 3 && <Step3 />}
      </Content>
    </Page>
  );
};

export default Reservation;
