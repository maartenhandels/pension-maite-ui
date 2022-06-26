import React from "react";

import classes from "./RoomType.module.css";

const RoomType = ({ imagePath, imageText, className }) => {
  return (
    <div className={`${classes.RoomType} ${className}`}>
      <a>
        <img src={imagePath} className={`img-fluid ${classes.Image}`} />
        <div className={classes.Text}>
          <b>{imageText}</b>
        </div>
      </a>
    </div>
  );
};

export default RoomType;
