import React from "react";

import classes from "./Step3.module.css";

import Card from "../../../components/UI/Card/Card";
import InfoCard from "../../../components/UI/InfoCard/InfoCard";

const Step3 = () => {
  const reservationCode = 1002;
  const checkinDate = "2022-07-25";
  const checkoutDate = "2022-07-27";
  const precioTotal = 130;
  return (
    <Card className={classes.Step3}>
      <h2>Su Reserva ha sido confirmada!</h2>
      <h3>
        Su código de reserva es: <b>{reservationCode}</b>
      </h3>
      <hr />
      <h3>Detalles:</h3>
      <div className={classes.Dates}>
        <InfoCard>Fecha entrada: {checkinDate}</InfoCard>
        <InfoCard>Fecha salida: {checkoutDate}</InfoCard>
      </div>
      <div className={classes.Rooms}>
        <Card className={classes.Room}>
          <img
            src="images/rooms/single.jpg"
            className={`img-fluid ${classes.RoomImage}`}
          />
          <div className={classes.Tags}>
            <InfoCard>Matrimonio</InfoCard>
            <InfoCard>2 habitaciones</InfoCard>
          </div>
        </Card>
        <Card className={classes.Room}>
          <img
            src="images/rooms/single.jpg"
            className={`img-fluid ${classes.RoomImage}`}
          />
          <div className={classes.Tags}>
            <InfoCard>Matrimonio</InfoCard>
            <InfoCard>2 habitaciones</InfoCard>
          </div>
        </Card>
      </div>
      <div className={classes.Price}>
        <h3>Precio Total:</h3>
        <InfoCard>{precioTotal}€</InfoCard>
        <span>(El pago se realizará en la pensión)</span>
      </div>
    </Card>
  );
};

export default Step3;
