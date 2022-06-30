import React from "react";

import classes from "./RoomList.module.css";

import Room from "./Room/Room";

const RoomList = () => {
  return (
    <div className={classes.RoomList}>
      <Room roomType="single" />
      <Room roomType="double" />
    </div>
  );
};

export default RoomList;
