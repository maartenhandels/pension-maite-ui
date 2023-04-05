import React from "react";

import classes from "./RoomList.module.css";

import Room from "./Room/Room";
import { type } from "@testing-library/user-event/dist/type";

const RoomList = ({ availableRooms = [], addItemHandler }) => {
  console.log("The list inside RoomList is: " + availableRooms);

  return (
    <div className={classes.RoomList}>
      {availableRooms.map((room, index) => (
        <Room
          key={index}
          roomType={room.roomType.name}
          roomTypeImageFilename={room.roomType.imageFilename}
          roomPrice={100}
          numberOfNights={2}
          availableRooms={availableRooms.length}
          addItemHandler={addItemHandler}
        />
      ))}
    </div>
  );
};

export default RoomList;
