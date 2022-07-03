import React from "react";

import classes from "./RoomList.module.css";

import Room from "./Room/Room";

const RoomList = ({ availableRooms = [], addItemHandler }) => {
  return (
    <div className={classes.RoomList}>
      {availableRooms.map((room, index) => (
        <Room
          key={index}
          roomType={room.type}
          roomPrice={room.totalPrice}
          numberOfNights={room.numberOfNights}
          availableRooms={room.availableRooms}
          addItemHandler={addItemHandler}
        />
      ))}
    </div>
  );
};

export default RoomList;
