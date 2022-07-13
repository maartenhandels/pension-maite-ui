import React, { useEffect } from "react";

import classes from "./ReservationSummary.module.css";

import Card from "../UI/Card/Card";
import InfoCard from "../UI/InfoCard/InfoCard";

import { capitalizeFirstLetter } from "../../utilities/stringUtitilities";

const ReservationSummary = ({ reservationData, newReservation = false, className }) => {

  return (
    <Card className={`${classes.ReservationSummary} ${className}`}>
      {newReservation && <h2>Su Reserva ha sido confirmada!</h2>}
      <h3>
        Código de Reserva: <b>{reservationData?.reservationCode}</b>
      </h3>
      <hr />
      <h3>Detalles:</h3>
      <div className={classes.Dates}>
        <InfoCard>Fecha entrada: {reservationData?.checkinDate}</InfoCard>
        <InfoCard>Fecha salida: {reservationData?.checkoutDate}</InfoCard>
      </div>
      <div className={classes.Rooms}>
        {reservationData?.rooms.map((room, index) => {
          console.log(room);
          return (
            <Card className={classes.Room} key={index}>
              <img
                src="images/rooms/single.jpg"
                className={`img-fluid ${classes.RoomImage}`}
              />
              <div className={classes.Tags}>
                <InfoCard>{capitalizeFirstLetter(room.type)}</InfoCard>
                <InfoCard>Cantidad: {room.quantity}</InfoCard>
              </div>
            </Card>
          );
        })}
      </div>
      <div className={classes.Price}>
        <h3>Precio Total:</h3>
        <InfoCard>{reservationData?.totalPrice}€</InfoCard>
        <span>(El pago se realizará en la pensión)</span>
      </div>
    </Card>
  );
};

export default ReservationSummary;
