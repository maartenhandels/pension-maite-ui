import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./ContactData.module.css";

import Card from "../UI/Card/Card";

const ContactData = () => {
  const { t } = useTranslation(null, { keyPrefix: "contactPage.contactData" });

  return (
    <Card className={classes.ContactData}>
      <h4>{t("header")}</h4>
    </Card>
  );
};

export default ContactData;
