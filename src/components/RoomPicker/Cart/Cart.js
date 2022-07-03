import React from "react";

import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Card from "../../UI/Card/Card";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cartItems = [], removeItemHandler }) => {
  return (
    <Card className={classes.Cart}>
      <h4 className={classes.Header}>
        <FontAwesomeIcon icon={faCartShopping} />
        &nbsp;Mi Reserva
      </h4>
      <hr />
      {cartItems.length > 0 && (
        <div className={classes.SubHeaders}>
          <h5>Habitación</h5>
          <h5>Precio</h5>
        </div>
      )}

      {cartItems.map((cartItem, index) => (
        <>
          <hr />
          <CartItem
            roomType={cartItem.roomType}
            quantity={cartItem.quantity}
            totalPrice={cartItem.price}
            removeItemHandler={removeItemHandler}
          />
        </>
      ))}
    </Card>
  );
};

export default Cart;
