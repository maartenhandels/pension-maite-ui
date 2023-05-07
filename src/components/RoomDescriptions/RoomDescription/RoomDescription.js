import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./RoomDescription.module.css";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const RoomDescription = ({ roomType, roomDescription, roomImagePath }) => {
  const { t } = useTranslation(null, {
    keyPrefix: "roomsPage.roomDescriptions",
  });
  return (
    <FlexCenter className={classes.RoomDescription}>
      <div className={classes.ImageContainer}>
        <img src={roomImagePath} className="img-fluid" />
      </div>

      <div className={classes.Description}>
        <h3>{roomType}</h3>
        <p>{roomDescription}</p>
        <Link to="/book">
          <Button className={classes.Button}>{t("RoomTypeBtnText")}</Button>
        </Link>
      </div>
    </FlexCenter>
  );
};

export default RoomDescription;
