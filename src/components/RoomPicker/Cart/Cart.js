import React from "react";

import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Card from "../../UI/Card/Card";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  return (
    <Card className={classes.Cart}>
      <h4 className={classes.Header}>
        <FontAwesomeIcon icon={faCartShopping} />
        &nbsp;Mi Reserva
      </h4>
      <hr />
      <div className={classes.SubHeaders}>
        <h5>Habitación</h5>
        <h5>Precio</h5>
      </div>
      <hr />
      <CartItem roomType="Individual" quantity={2} totalPrice={60} />
    </Card>
  );
};

export default Cart;
