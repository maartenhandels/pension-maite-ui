import React from "react";

import classes from "./RoomPicker.module.css";

import RoomList from "./RoomList/RoomList";
import Cart from "./Cart/Cart";
import FlexCenter from "../../containers/FlexCenter/FlexCenter";
import Discount from "./Discount/Discount";
import Price from "./Price/Price";

const RoomPicker = () => {
  return (
    <div className={classes.RoomPicker}>
      <RoomList />
      <div className={classes.SideBar}>
        <Cart />
        <Discount />
        <Price />
      </div>
    </div>
  );
};

export default RoomPicker;
