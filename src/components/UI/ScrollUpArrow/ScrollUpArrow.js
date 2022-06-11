import React from "react";

import classes from "./ScrollUpArrow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollUpArrow = () => {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.ScrollUpArrow} onClick={onClickHandler}>
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
};

export default ScrollUpArrow;
