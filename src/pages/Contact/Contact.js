import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Contact.module.css";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/UI/PageHeader/PageHeader";
import Content from "../../containers/Content/Content";
import ContactData from "../../components/ContactItems/ContactData/ContactData";
import Location from "../../components/ContactItems/Location/Location";
import BusinessHours from "../../components/ContactItems/BusinessHours/BusinessHours";
import ContactForm from "../../components/ContactItems/ContactForm/ContactForm";

const Contact = () => {
  const { t } = useTranslation(null, { keyPrefix: "contactPage" });

  return (
    <Page>
      <PageHeader>{t("pageHeader")}</PageHeader>
      <Content className={classes.Content}>
        <div className={classes.SideBar}>
          <ContactData />
          <Location />
          <BusinessHours />
        </div>
        <div className={classes.Form}>
          <ContactForm />
        </div>
      </Content>
    </Page>
  );
};

export default Contact;
