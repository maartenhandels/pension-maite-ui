import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import ReservationProgressBar from "../../components/ReservationProgressBar/ReservationProgressBar";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Content from "../../containers/Content/Content";

import { API_BASE_URL } from "../../config/config";

const Reservation = () => {
  const { t } = useTranslation(null, { keyPrefix: "reservationPage" });

  const { state } = useLocation();

  const [step, setStep] = useState(1);
  const [reservationData, setReservationData] = useState({
    checkinDate: state ? state.checkinDate : "",
    checkoutDate: state ? state.checkoutDate : "",
  });
  const [availableRoomTypes, setAvailableRoomTypes] = useState([]);
  const [numberOfNights, setNumberOfNights] = useState(1);

  useEffect(() => {
    getAvailableRoomTypes(
      state ? state.checkinDate : "",
      state ? state.checkoutDate : ""
    );
  }, []);

  useEffect(() => {
    console.log("AvailableRoomTypes length:", availableRoomTypes.length);
    console.log("Reservation Data: " + JSON.stringify(reservationData));
  }, [availableRoomTypes, reservationData]);

  const incrementStep = (data) => {
    setReservationData({ ...reservationData, data });
    setStep(step + 1);
    console.log(data);
  };

  const decrementStep = () => {
    setStep(step - 1);
  };

  const getAvailableRoomTypes = (checkinDate, checkoutDate) => {
    // API call to backend...
    const fetchData = async () => {
      try {
        console.log("Calling backend for available rooms...");
        const response = await fetch(
          `${API_BASE_URL}/room/get-available?` +
            new URLSearchParams({
              checkinDate: checkinDate,
              checkoutDate: checkoutDate,
            }),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonData = await response.json();
        console.log("JsonData: " + JSON.stringify(jsonData));
        if (jsonData.data == null) {
          // TODO: Show something in the frontend
          console.log("No rooms available for the requested dates");
        } else {
          const roomTypes = jsonData.data["availableRoomTypes"].map(
            (roomType) => ({
              id: roomType.roomType,
              name: roomType.roomType,
              capacity: roomType.capacity,
              imageFilename: roomType.imageFilename,
              totalPrice: roomType.totalPrice,
            })
          );
          setAvailableRoomTypes(roomTypes);
          setNumberOfNights(jsonData.data["numberOfNights"]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <Page hideBookBtn={true}>
      <PageHeader>{t("pageHeader")}</PageHeader>

      <Content>
        <ReservationProgressBar currentStep={step} />

        {step === 1 && (
          <Step1
            availableRoomTypes={availableRoomTypes}
            numberOfNights={numberOfNights}
            reservationData={reservationData}
            incrementStepHandler={incrementStep}
            getAvailableRoomTypesHandler={getAvailableRoomTypes}
            setReservationDataHandler={setReservationData}
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
