import React from "react";

import classes from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ roomType, quantity, totalPrice, removeItemHandler }) => {
  return (
    <div className={classes.CartItem}>
      <span>
        x{quantity}&nbsp;{roomType}
      </span>
      <span>{totalPrice}&nbsp;€</span>
      <FontAwesomeIcon
        icon={faTrash}
        className={classes.Icon}
        onClick={() => removeItemHandler(roomType)}
      />
    </div>
  );
};

export default CartItem;
