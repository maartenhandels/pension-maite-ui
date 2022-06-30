import React, { useState } from "react";

import classes from "./Room.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus, faMoon } from "@fortawesome/free-solid-svg-icons";

import FlexCenter from "../../../../containers/FlexCenter/FlexCenter";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";

const Room = ({
  roomType = "single",
  roomPrice = 30,
  numberOfNights = 1,
  availableRooms = 4,
}) => {
  const [quantity, setQuantity] = useState(1);

  const quantityMinValue = 1;

  const imagePaths = {
    single: "images/rooms/single.jpg",
    double: "images/rooms/double.jpg",
    twoBeds: "images/rooms/two-beds.jpg",
    triple: "images/rooms/triple.jpg",
  };

  const incrementHandler = () => {
    if (quantity == availableRooms) {
      return;
    }
    setQuantity((currQuanty) => currQuanty + 1);
  };

  const decrementHandler = () => {
    if (quantity == quantityMinValue) {
      return;
    }
    setQuantity((currQuanty) => currQuanty - 1);
  };

  return (
    <Card className={classes.Room}>
      <FlexCenter className={classes.FirstRow}>
        <img
          src={imagePaths[roomType]}
          className={`img-fluid ${classes.Image}`}
        />
        <div className={classes.Info}>
          <h4>Habitación Individual</h4>
          <p>
            Habitación sencilla pero muy acogedora, perfecta para trabajadores y
            viajeros que lo que buscan es un lugar agradable donde dormir, tener
            una buena conexión wifi y tener baño privado. Además, dispone de
            escritorio y frigorífico.
          </p>
        </div>
        <div className={classes.Price}>
          <h5>{roomPrice * quantity * numberOfNights}&nbsp;€</h5>
          <p>
            Precio total {numberOfNights} <FontAwesomeIcon icon={faMoon} />
          </p>
        </div>
      </FlexCenter>

      <FlexCenter className={classes.SecondRow}>
        <FlexCenter className={classes.Capacity}>
          <span>x2&nbsp;</span>
          <FontAwesomeIcon icon={faUser} />
        </FlexCenter>
        <Card className={classes.Counter}>
          <span
            className={`${classes.Minus} ${
              quantity <= 1 ? classes.Disabled : ""
            }`}
            onClick={decrementHandler}
          >
            -
          </span>
          <span className={classes.Number}>{quantity}</span>
          <span
            className={`${classes.Plus} ${
              quantity >= availableRooms ? classes.Disabled : ""
            }`}
            onClick={incrementHandler}
          >
            +
          </span>
        </Card>
        <Button className={classes.AddBtn}>
          Añadir&nbsp;
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
      </FlexCenter>
    </Card>
  );
};

export default Room;
