import React from "react";

import classes from "./RoomTypes.module.css";

import ImageCircle from "../UI/ImageCircle/ImageCircle";
import RoomType from "./RoomType/RoomType";
import Card from "../UI/Card/Card";
import FlexCenter from "../../containers/FlexCenter/FlexCenter";

const RoomTypes = () => {
  const roomTypes = [
    {
      imagePath: "images/rooms/round/single.png",
      imageText: "Individual",
    },
    {
      imagePath: "images/rooms/round/two-beds.png",
      imageText: "Dos Camas",
    },
    {
      imagePath: "images/rooms/round/double.png",
      imageText: "Matrimonio",
    },
    {
      imagePath: "images/rooms/round/triple.png",
      imageText: "Triple",
    },
  ];

  return (
    <div className={classes.RoomTypes}>
      <p className={classes.Text}>
        La Pension Maite ofrece <b>16 habitaciones</b> adaptadas a las nuevas
        normativas arquitectónicas
      </p>
      <div className={classes.Images}>
        {roomTypes.map((roomType) => (
          <RoomType
            key={roomType.path}
            imagePath={roomType.imagePath}
            imageText={roomType.imageText}
            className={classes.Image}
          />
        ))}
      </div>
      <FlexCenter>
        <Card className={`alert alert-primary ${classes.Note}`}>
          Posibilidad de habitación familiar formada por dos habitaciones, una
          doble y una triple, separadas del resto de la pensión por una
          puerta.&nbsp;
          <a href="#">Contácte con nosotros.</a>
        </Card>
      </FlexCenter>
    </div>
  );
};

export default RoomTypes;
