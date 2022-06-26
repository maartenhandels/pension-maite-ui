import React from "react";
import RoomDescription from "./RoomDescription/RoomDescription";

import classes from "./RoomDescriptions.module.css";

const RoomDescriptions = () => {
  const roomDescriptions = [
    {
      roomType: "Individual",
      roomDescription:
        "Habitación sencilla pero muy acogedora, perfecta para trabajadores y viajeros que lo que buscan es un lugar agradable donde dormir, tener una buena conexión wifi y tener baño privado. Además, dispone de escritorio y frigorífico.",
      roomImagePath: "images/rooms/single.jpg",
    },
    {
      roomType: "Dos camas",
      roomDescription:
        "Habitación perfecta para dos personas que buscan un lugar agradable donde dormir, tener buena conexión wifi y baño privado.",
      roomImagePath: "images/rooms/two-beds.jpg",
    },
    {
      roomType: "Matrimonio",
      roomDescription:
        "Habitación ideal para parejas que buscan un lugar agradable donde dormir, tener buena conexión wifi y baño privado.",
      roomImagePath: "images/rooms/double.jpg",
    },
    {
      roomType: "Triple",
      roomDescription:
        "Habitación ideal para tres personas que buscan un lugar agradable donde dormir, tener buena conexión wifi y baño privado.",
      roomImagePath: "images/rooms/triple.jpg",
    },
  ];

  return (
    <div className={classes.RoomDescriptions}>
      {roomDescriptions.map((roomDescription) => (
        <RoomDescription
          key={roomDescription.roomType}
          roomType={roomDescription.roomType}
          roomDescription={roomDescription.roomDescription}
          roomImagePath={roomDescription.roomImagePath}
        />
      ))}
    </div>
  );
};

export default RoomDescriptions;
