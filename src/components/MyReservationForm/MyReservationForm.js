import React, { useState } from "react";

import classes from "./MyReservationForm.module.css";

import Card from "../UI/Card/Card";
import FormInput from "../UI/FormElements/FormInput/FormInput";
import Button from "../UI/Button/Button";

const MyReservationForm = ({ setReservationDataHandler }) => {
  const [email, setEmail] = useState("");
  const [reservationCode, setReservationCode] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Dummy Data
    const reservationData = {
      reservationCode: 1002,
      checkinDate: "2022-07-25",
      checkoutDate: "2022-07-27",
      totalPrice: 60,
      rooms: [
        {
          type: "double",
          quantity: 1,
        },
      ],
    };

    setReservationDataHandler(reservationData);
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
        />
        <FormInput
          name="code"
          type="text"
          label="Código de Reserva"
          value={reservationCode}
          onChangeHandler={setReservationCode}
        />
        <Button className={classes.Button}>Buscar</Button>
      </form>
    </Card>
  );
};

export default MyReservationForm;
