import React from "react";

import classes from "./ImageCircle.module.css";

const ImageCircle = ({ className, imagePath }) => {
  return (
    <div className={`${classes.ImageCircle} ${className}`}>
      <img src={imagePath} />
    </div>
  );
};

export default ImageCircle;
