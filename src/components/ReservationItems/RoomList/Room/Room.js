import React, { useEffect, useState } from "react";

import classes from "./Room.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus, faMoon } from "@fortawesome/free-solid-svg-icons";

import FlexCenter from "../../../../containers/FlexCenter/FlexCenter";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";

import { useTranslation } from "react-i18next";

const Room = ({
  roomType = "SINGLE",
  roomTypeImageFilename = "single.jpg",
  totalPrice = 30,
  numberOfNights = 1,
  availableRooms = 4,
  addItemHandler,
}) => {
  const [quantity, setQuantity] = useState(1);

  const { t } = useTranslation(null, { keyPrefix: "roomsPage.roomTypes" });

  const quantityMinValue = 1;

  console.log("imageFilename: " + roomTypeImageFilename);

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
          src={`images/rooms/${roomTypeImageFilename}`}
          className={`img-fluid ${classes.Image}`}
        />
        <div className={classes.Info}>
          <h4>{t(`${roomType.toLowerCase()}_title`)}</h4>
          <p>{t(`${roomType.toLowerCase()}_description`)}</p>
        </div>
        <div className={classes.Price}>
          <h5>{totalPrice}&nbsp;€</h5>
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
        <Button
          className={classes.AddBtn}
          onClick={() =>
            addItemHandler(roomType, quantity, totalPrice * quantity)
          }
        >
          Añadir&nbsp;
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
      </FlexCenter>
    </Card>
  );
};

export default Room;
