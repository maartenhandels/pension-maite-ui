import React from "react";

import classes from "./ReservationSummary.module.css";

import Card from "../UI/Card/Card";
import InfoCard from "../UI/InfoCard/InfoCard";

import { capitalizeFirstLetter } from "../../utilities/stringUtitilities";

const ReservationSummary = ({
  confirmationData,
  newReservation = false,
  className,
}) => {
  return (
    <Card className={`${classes.ReservationSummary} ${className}`}>
      {newReservation && <h2>Su Reserva ha sido confirmada!</h2>}
      <h3>
        Código de Reserva: <b>{confirmationData?.reservationId}</b>
      </h3>
      <hr />
      <div className={classes.Dates}>
        <InfoCard className={classes.Date}>
          Fecha entrada: {confirmationData?.checkinDate}
        </InfoCard>
        <InfoCard className={classes.Date}>
          Fecha salida: {confirmationData?.checkoutDate}
        </InfoCard>
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
                <InfoCard className={classes.Tag}>
                  {capitalizeFirstLetter(roomType.roomTypeName)}
                </InfoCard>
                <InfoCard className={classes.Tag}>
                  Cantidad: {roomType.numberOfRooms}
                </InfoCard>
              </div>
            </Card>
          );
        })}
      </div>
      <div className={classes.PriceWrapper}>
        <h3>Precio Total:</h3>
        <InfoCard className={classes.Price}>
          {confirmationData?.totalPrice}€
        </InfoCard>
        <span>(El pago se realizará en la pensión)</span>
      </div>
    </Card>
  );
};

export default ReservationSummary;
