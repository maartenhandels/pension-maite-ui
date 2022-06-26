import React from "react";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import Button from "../../UI/Button/Button";

import classes from "./RoomDescription.module.css";

const RoomDescription = ({ roomType, roomDescription, roomImagePath }) => {
  return (
    <FlexCenter className={classes.RoomDescription}>
      <div className={classes.ImageContainer}>
        <img src={roomImagePath} className="img-fluid" />
      </div>

      <div className={classes.Description}>
        <h3>Habitacion {roomType}</h3>
        <p>{roomDescription}</p>
        <Button className={classes.Button}>Consultar Disponibilidad</Button>
      </div>
    </FlexCenter>
  );
};

export default RoomDescription;
