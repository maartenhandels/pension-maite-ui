import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Contact.module.css";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/PageHeader/PageHeader";
import Content from "../../containers/Content/Content";
import ContactData from "../../components/ContactData/ContactData";

const Contact = () => {
  const { t } = useTranslation(null, { keyPrefix: "contactPage" });

  return (
    <Page>
      <PageHeader>{t("pageHeader")}</PageHeader>
      <Content className={classes.Content}>
        <ContactData />
      </Content>
    </Page>
  );
};

export default Contact;
