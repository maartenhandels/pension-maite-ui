import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./ReservationProgressBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";

const ReservationProgressBar = ({ currentStep = 1 }) => {
  const { t } = useTranslation(null, { keyPrefix: "reservationPage.progressBar" });

  return (
    <div className={classes.Progressbar}>
      <div className={classes.ProgressbarIcons}>
        
        {/* Step 1 */}
        <div className={`${classes.ProgressbarStep} ${classes.Active}`}>
          <FontAwesomeIcon
            icon={faBed}
            className={`${classes.Icon} ${classes.Active}`}
          />
          <span>{t("step1").toUpperCase()}</span>
        </div>

        {/* Horizontal Line */}
        <div className={`${classes.HrContainer} ${classes.Active}`}>
          <hr className={`${classes.HrLine} ${currentStep > 1 ? classes.Active : ""}`} />
        </div>

        {/* Step 2 */}
        <div className={`${classes.ProgressbarStep} ${currentStep > 1 ? classes.Active : ""}`}>
          <FontAwesomeIcon
            icon={faUser}
            className={`${classes.Icon} ${currentStep > 1 ? classes.Active : ""}`}
          />
          <span>{t("step2").toUpperCase()}</span>
        </div>

        {/* Horizontal Line */}
        <div className={classes.HrContainer}>
          <hr className={`${classes.HrLine} ${currentStep > 2 ? classes.Active : ""}`} />
        </div>

        {/* Step 3 */}
        <div className={`${classes.ProgressbarStep} ${currentStep > 2 ? classes.Active : ""}`}>
          <FontAwesomeIcon
            icon={faCheck}
            className={`${classes.Icon} ${currentStep > 2 ? classes.Active : ""}`}
          />
          <span>{t("step3").toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationProgressBar;
