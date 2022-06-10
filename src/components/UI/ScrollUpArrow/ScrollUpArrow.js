import React from "react";

import classes from "./ScrollUpArrow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollUpArrow = () => {
  return (
    <div className={classes.ScrollUpArrow}>
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
};

export default ScrollUpArrow;
