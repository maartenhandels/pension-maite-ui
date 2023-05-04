import React, { useEffect, useState } from "react";

import classes from "./RoomPicker.module.css";

import RoomList from "../RoomList/RoomList";
import Cart from "../Cart/Cart";
import Discount from "../Discount/Discount";
import Price from "../Price/Price";

const RoomPicker = ({
  availableRooms = [],
  numberOfNights,
  incrementStepHandler,
  reservationData,
}) => {
  console.log(availableRooms);
  const [cartItems, setCartItems] = useState(
    reservationData?.cartItems ? reservationData.cartItems : []
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState();

  const addItemToCart = (roomType, quantity, price) => {
    const newCartItems = [];

    cartItems.forEach((cartItem) => {
      if (cartItem.roomType != roomType) {
        newCartItems.push(cartItem);
      }
    });

    setCartItems([...newCartItems, { roomType, quantity, price }]);
  };

  const removeItemFromCart = (roomType) => {
    const newCartItems = cartItems.filter((item) => item.roomType != roomType);

    setCartItems(newCartItems);
  };

  const applyDiscount = (discount, discountCode) => {
    setDiscount(discount);
    setDiscountCode(discountCode);
  };

  const confirmPrice = () => {
    incrementStepHandler({
      cartItems: cartItems,
      totalPrice: totalPrice,
      discount: discount,
      discountCode: discountCode,
    });
  };

  useEffect(() => {
    let newTotalPrice = 0;
    cartItems.forEach((item) => {
      newTotalPrice += item.price;
    });

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div className={classes.RoomPicker}>
      <RoomList
        availableRooms={availableRooms}
        numberOfNights={numberOfNights}
        addItemHandler={addItemToCart}
      />
      <div className={classes.SideBar}>
        <Cart cartItems={cartItems} removeItemHandler={removeItemFromCart} />
        <Discount applyDiscountHandler={applyDiscount} />
        <Price
          totalPrice={totalPrice}
          isCartEmpty={cartItems.length === 0}
          discount={discount}
          priceConfirmationHandler={confirmPrice}
        />
      </div>
    </div>
  );
};

export default RoomPicker;
