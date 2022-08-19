import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./ContactData.module.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactData = () => {
  const { t } = useTranslation(null, { keyPrefix: "contactPage.contactData" });

  return (
    <Card className={classes.ContactData}>
      {/* Header */}
      <h4>{t("header")}</h4>

      {/* Contact Data */}
      <div className={classes.DataField}>
        <FontAwesomeIcon icon={faEnvelope} />
        <label>info@pensionmaite.com</label>
      </div>
      <div className={classes.DataField}>
        <FontAwesomeIcon icon={faPhone} />
        <label>(+34) 943 470 715</label>
      </div>
    </Card>
  );
};

export default ContactData;
