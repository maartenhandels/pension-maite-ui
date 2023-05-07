import React from "react";
import { useTranslation } from "react-i18next";

import RoomDescription from "./RoomDescription/RoomDescription";

import classes from "./RoomDescriptions.module.css";

import {
  SingleRoomImagePath,
  TwoBedsRoomImagePath,
  DoubleRoomImagePath,
  TripleRoomImagePath,
} from "../../config/config";

const RoomDescriptions = () => {
  const { t } = useTranslation(null, {
    keyPrefix: "roomsPage.roomDescriptions",
  });

  const roomDescriptions = [
    {
      roomType: t("single_title"),
      roomDescription: t("single_description"),
      roomImagePath: SingleRoomImagePath,
    },
    {
      roomType: t("twin_title"),
      roomDescription: t("twin_description"),
      roomImagePath: TwoBedsRoomImagePath,
    },
    {
      roomType: t("double_title"),
      roomDescription: t("double_description"),
      roomImagePath: DoubleRoomImagePath,
    },
    {
      roomType: t("triple_title"),
      roomDescription: t("triple_description"),
      roomImagePath: TripleRoomImagePath,
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
