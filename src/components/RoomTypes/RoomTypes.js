import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./RoomTypes.module.css";
import * as Config from "../../config/config";

import RoomType from "./RoomType/RoomType";
import Card from "../UI/Card/Card";
import FlexCenter from "../../containers/FlexCenter/FlexCenter";

const RoomTypes = () => {
  const { t } = useTranslation(null, { keyPrefix: "roomsPage.roomTypes" });

  const roomTypes = [
    {
      imagePath: Config.SingleRoomRoundImagePath,
      imageText: t("single"),
    },
    {
      imagePath: Config.TwoBedsRoomRoundImagePath,
      imageText: t("twoBeds"),
    },
    {
      imagePath: Config.DoubleRoomRoundImagePath,
      imageText: t("double"),
    },
    {
      imagePath: Config.TripleRoomRoundImagePath,
      imageText: t("triple"),
    },
  ];

  return (
    <div className={classes.RoomTypes}>
      <p
        className={classes.Text}
        dangerouslySetInnerHTML={{ __html: t("topText") }}
      />
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
