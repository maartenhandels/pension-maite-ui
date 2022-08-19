import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./ContactForm.module.css";

import Card from "../../UI/Card/Card";
import FormInput from "../../UI/FormElements/FormInput/FormInput";
import TextArea from "../../UI/FormElements/TextArea/TexArea";
import Button from "../../UI/Button/Button";

const ContactForm = () => {
  const { t } = useTranslation(null, { keyPrefix: "contactPage.form" });

  return (
    <Card className={classes.ContactForm}>
      <FormInput
        name="name"
        type="text"
        label={t("nameLabel")}
        className={classes.Input}
      />
      <FormInput
        name="name"
        type="text"
        label={t("subjectLabel")}
        className={classes.Input}
      />
      <FormInput
        name="name"
        type="email"
        label={t("emailLabel")}
        className={classes.Input}
      />
      <FormInput
        name="name"
        type="phone"
        label={t("phoneLabel")}
        className={classes.Input}
      />
      <TextArea
        name="comment"
        label={t("commentLabel")}
        className={classes.TextArea}
      />
      <Button className={classes.Button}>Enviar</Button>
    </Card>
  );
};

export default ContactForm;
