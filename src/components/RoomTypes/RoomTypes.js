import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./RoomTypes.module.css";
import * as Constants from "../../constants/constants";

import RoomType from "./RoomType/RoomType";
import Card from "../UI/Card/Card";
import FlexCenter from "../../containers/FlexCenter/FlexCenter";

const RoomTypes = () => {
  const { t } = useTranslation(null, { keyPrefix: "roomsPage.roomTypes" });

  const roomTypes = [
    {
      imagePath: Constants.SingleRoomImagePath,
      imageText: t("single"),
    },
    {
      imagePath: Constants.TwoBedsRoomImagePath,
      imageText: t("twoBeds"),
    },
    {
      imagePath: Constants.DoubleRoomImagePath,
      imageText: t("double"),
    },
    {
      imagePath: Constants.TripleRoomImagePath,
      imageText: t("triple"),
    },
  ];

  return (
    <div className={classes.RoomTypes}>
      <p className={classes.Text} dangerouslySetInnerHTML={{ __html: t("topText") }} />
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
          {t("bottomText")}&nbsp;
          <a href="#">{t("urlText")}</a>
        </Card>
      </FlexCenter>
    </div>
  );
};

export default RoomTypes;
