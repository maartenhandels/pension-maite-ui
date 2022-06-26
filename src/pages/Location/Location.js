import React from "react";

import classes from "./Location.module.css";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/PageHeader/PageHeader";
import { LocationContent } from "../../components/Location/Location";
import Content from "../../containers/Content/Content";

const Location = () => {
  return (
    <Page>
      <PageHeader>Ubicación</PageHeader>
      <Content>
        <LocationContent />
      </Content>
    </Page>
  );
};

export default Location;
