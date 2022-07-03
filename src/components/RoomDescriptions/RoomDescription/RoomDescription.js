import React from "react";

import classes from "./RoomDescription.module.css";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const RoomDescription = ({ roomType, roomDescription, roomImagePath }) => {
  return (
    <FlexCenter className={classes.RoomDescription}>
      <div className={classes.ImageContainer}>
        <img src={roomImagePath} className="img-fluid" />
      </div>

      <div className={classes.Description}>
        <h3>Habitacion {roomType}</h3>
        <p>{roomDescription}</p>
        <Link to="/book">
          <Button className={classes.Button}>Consultar Disponibilidad</Button>
        </Link>
      </div>
    </FlexCenter>
  );
};

export default RoomDescription;
