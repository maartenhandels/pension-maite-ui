import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Location.module.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Location = () => {
  const { t } = useTranslation(null, { keyPrefix: "contactPage.location" });

  return (
    <Card className={classes.Location}>
      {/* Header */}
      <h4>{t("header")}</h4>

      {/* Address */}
      <div>{t("line1")}</div>
      <div>{t("line2")}</div>
    </Card>
  );
};

export default Location;
