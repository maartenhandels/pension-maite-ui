import React from "react";

import classes from "./ReservationProgressBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";

const ReservationProgressBar = ({ currentStep = 1 }) => {
  return (
    <div className={classes.Progressbar}>
      <div className={classes.ProgressbarIcons}>
        <div className={`${classes.ProgressbarStep} ${classes.Active}`}>
          <FontAwesomeIcon
            icon={faBed}
            className={`${classes.Icon} ${classes.Active}`}
          />
          <span>1. SELECCIÓN</span>
        </div>

        <div className={`${classes.HrContainer} ${classes.Active}`}>
          <hr
            className={`${classes.HrLine} ${
              currentStep > 1 ? classes.Active : ""
            }`}
          />
        </div>
        <div className={classes.ProgressbarStep}>
          <FontAwesomeIcon
            icon={faUser}
            className={`${classes.Icon} ${
              currentStep > 1 ? classes.Active : ""
            }`}
          />
          <span>2. DATOS</span>
        </div>

        <div className={classes.HrContainer}>
          <hr
            className={`${classes.HrLine} ${
              currentStep > 2 ? classes.Active : ""
            }`}
          />
        </div>
        <div className={classes.ProgressbarStep}>
          <FontAwesomeIcon
            icon={faCheck}
            className={`${classes.Icon} ${
              currentStep > 2 ? classes.Active : ""
            }`}
          />
          <span>3. CONFIRMACION</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationProgressBar;
