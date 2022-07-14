import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./ReturnButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ReturnButton = ({ className, onClickHandler }) => {
  const { t } = useTranslation(null, { keyPrefix: "reservationPage.step2" });
  return (
    <div
      className={`${classes.ReturnButton} ${className}`}
      onClick={onClickHandler}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>{t("returnBtn")}</span>
    </div>
  );
};

export default ReturnButton;
