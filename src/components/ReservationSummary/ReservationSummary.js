import React, { useEffect } from "react";

import classes from "./ReservationSummary.module.css";

import Card from "../UI/Card/Card";
import InfoCard from "../UI/InfoCard/InfoCard";

import { capitalizeFirstLetter } from "../../utilities/stringUtitilities";

const ReservationSummary = ({
  confirmationData,
  newReservation = false,
  className,
}) => {
  console.log("ConfirmationData: " + confirmationData);
  return (
    <Card className={`${classes.ReservationSummary} ${className}`}>
      {newReservation && <h2>Su Reserva ha sido confirmada!</h2>}
      <h3>
        Código de Reserva: <b>{confirmationData?.reservationId}</b>
      </h3>
      <hr />
      <h3>Detalles:</h3>
      <div className={classes.Dates}>
        <InfoCard>Fecha entrada: {confirmationData?.checkinDate}</InfoCard>
        <InfoCard>Fecha salida: {confirmationData?.checkoutDate}</InfoCard>
      </div>
      <div className={classes.Rooms}>
        {confirmationData?.reservedRoomTypes.map((roomType, index) => {
          console.log(roomType);
          return (
            <Card className={classes.Room} key={index}>
              <img
                src={`images/rooms/${roomType.imageFilename}`}
                className={`img-fluid ${classes.RoomImage}`}
              />
              <div className={classes.Tags}>
                <InfoCard>
                  {capitalizeFirstLetter(roomType.roomTypeName)}
                </InfoCard>
                <InfoCard>Cantidad: {roomType.numberOfRooms}</InfoCard>
              </div>
            </Card>
          );
        })}
      </div>
      <div className={classes.Price}>
        <h3>Precio Total:</h3>
        <InfoCard>{confirmationData?.totalPrice}€</InfoCard>
        <span>(El pago se realizará en la pensión)</span>
      </div>
    </Card>
  );
};

export default ReservationSummary;
