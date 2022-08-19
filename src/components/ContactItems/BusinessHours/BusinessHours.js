import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./BusinessHours.module.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BusinessHours = () => {
  const { t } = useTranslation(null, {
    keyPrefix: "contactPage.businessHours",
  });

  return (
    <Card className={classes.BusinessHours}>
      {/* Header */}
      <h4>{t("header")}</h4>

      {/* Address */}
      <div className={classes.Hour}>
        <FontAwesomeIcon icon={faClock} />
        <label>{t("line1")}</label>
      </div>
      <div className={classes.Hour}>
        <FontAwesomeIcon icon={faClock} />
        <label>{t("line2")}</label>
      </div>
    </Card>
  );
};

export default BusinessHours;
