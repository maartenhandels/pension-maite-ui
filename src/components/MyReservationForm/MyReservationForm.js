import React, { useState } from "react";

import classes from "./MyReservationForm.module.css";

import Card from "../UI/Card/Card";
import FormInput from "../UI/FormElements/FormInput/FormInput";
import Button from "../UI/Button/Button";

import { isValidEmail } from "../../utilities/stringUtitilities";
import { RESERVATION_CODE_LENGTH } from "../../config/config";
import { API_BASE_URL } from "../../config/config";

const MyReservationForm = ({ setReservationDataHandler, setErrorHandler }) => {
  const [email, setEmail] = useState("");
  const [reservationCode, setReservationCode] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      // TODO: Replace with visual component
      setErrorHandler("Email is not Valid");
      return;
    }

    if (!(RESERVATION_CODE_LENGTH == reservationCode.length)) {
      // TODO: Replace with visual component
      setErrorHandler(
        `Reservation code format is not Valid. Must contain ${RESERVATION_CODE_LENGTH} characters.`
      );
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/reservation/get-details?` +
          new URLSearchParams({
            email: email,
            reservationCode: reservationCode,
          }),
        {
          method: "GET",
        }
      );
      const jsonResponse = await response.json();

      if (jsonResponse.data) {
        setReservationDataHandler({ ...jsonResponse.data });
        return;
      }
      console.warn(jsonResponse.error);

      setErrorHandler(jsonResponse.error);
    } catch (e) {
      setErrorHandler("Something went wrong, please try again");
    }
  };

  return (
    <Card className={classes.MyReservation}>
      <form className={classes.Form} onSubmit={onSubmitHandler}>
        <FormInput
          name="email"
          type="email"
          label="Email de Reserva"
          value={email}
          onChangeHandler={setEmail}
          className={classes.Input}
        />
        <FormInput
          name="code"
          type="text"
          label="Código de Reserva"
          value={reservationCode}
          onChangeHandler={setReservationCode}
          className={classes.Input}
        />
        <Button className={classes.Button}>Buscar</Button>
      </form>
    </Card>
  );
};

export default MyReservationForm;
