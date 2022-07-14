import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Card from "../../UI/Card/Card";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cartItems = [], removeItemHandler }) => {
  const { t } = useTranslation(null, { keyPrefix: "reservationPage.cart" });
  return (
    <Card className={classes.Cart}>
      <div className={classes.Header}>
        <FontAwesomeIcon icon={faCartShopping} className={classes.Icon} />
        <h4>{t("header")}</h4>
      </div>
      <hr />
      {cartItems.length > 0 && (
        <div className={classes.SubHeaders}>
          <h5>{t("roomHeader")}</h5>
          <h5>{t("priceHeader")}</h5>
        </div>
      )}

      {cartItems.map((cartItem, index) => (
        <div key={index}>
          <hr />
          <CartItem
            roomType={cartItem.roomType}
            quantity={cartItem.quantity}
            totalPrice={cartItem.price}
            removeItemHandler={removeItemHandler}
          />
        </div>
      ))}

      {cartItems.length == 0 && (
        <div className={classes.Alert}>Añade habitaciones al carro</div>
      )}
    </Card>
  );
};

export default Cart;
