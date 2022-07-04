import React from "react";

import classes from "./ReturnButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ReturnButton = ({ className, onClickHandler }) => {
  return (
    <div
      className={`${classes.ReturnButton} ${className}`}
      onClick={onClickHandler}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Volver</span>
    </div>
  );
};

export default ReturnButton;
