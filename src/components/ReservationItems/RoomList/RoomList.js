import React from "react";

import classes from "./RoomList.module.css";

import Room from "./Room/Room";
import { type } from "@testing-library/user-event/dist/type";

const RoomList = ({ availableRooms = [], addItemHandler, numberOfNights }) => {
  console.log("The list inside RoomList is: " + availableRooms);

  // TODO: Add some ui element in case there are no available rooms for those dates
  return (
    <div className={classes.RoomList}>
      {availableRooms.map((roomType, index) => (
        <Room
          key={index}
          roomType={roomType.name}
          roomTypeImageFilename={roomType.imageFilename}
          totalPrice={roomType.totalPrice}
          numberOfNights={numberOfNights}
          availableRooms={availableRooms.length}
          addItemHandler={addItemHandler}
        />
      ))}
    </div>
  );
};

export default RoomList;
