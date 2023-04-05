import React, { useState, useEffect } from "react";

import classes from "./Step1.module.css";

import DatePicker from "../../../components/DatePicker/DatePicker";
import RoomPicker from "../../../components/ReservationItems/RoomPicker/RoomPicker";

import { API_BASE_URL } from "../../../config/config.js";

const Step1 = ({
  checkinDate,
  checkoutDate,
  incrementStepHandler,
  reservationData,
}) => {
  const [availableRooms, setAvailableRooms] = useState([]);

  const checkDates = (checkinDate, checkoutDate) => {
    // API call to backend...
    const fetchData = async () => {
      try {
        console.log("Calling backend for available rooms...");
        const response = await fetch(
          `${API_BASE_URL}/room/get-available?` +
            new URLSearchParams({
              checkinDate: checkinDate,
              checkoutDate: checkoutDate,
            }),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonData = await response.json();
        const rooms = jsonData.data.map((room) => ({
          roomNumber: room.roomNumber,
          roomType: {
            id: room.roomType.id,
            name: room.roomType.name,
            capacity: room.roomType.capacity,
            imageFilename: room.roomType.imageFilename,
          },
        }));
        console.log("Type of rooms is: " + rooms.length);
        console.log(rooms);
        setAvailableRooms(rooms);
        console.log(availableRooms.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  useEffect(() => {
    checkDates(checkinDate, checkoutDate);
  }, []);

  useEffect(() => {
    console.log("availableRooms length:", availableRooms.length);
  }, [availableRooms]);

  return (
    <>
      <DatePicker
        className={classes.DatePicker}
        checkinDate={checkinDate}
        checkoutDate={checkoutDate}
        onSubmitHandler={checkDates}
      />
      <RoomPicker
        availableRooms={availableRooms}
        incrementStepHandler={incrementStepHandler}
        reservationData={reservationData}
      />
    </>
  );
};

export default Step1;
