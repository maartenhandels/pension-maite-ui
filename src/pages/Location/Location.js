import React from "react";

import classes from "./Location.module.css";

import ScrollUpArrow from "../../components/UI/ScrollUpArrow/ScrollUpArrow";
import NavBar from "../../components/NavBar/NavBar";
import PageTop from "../../containers/PageTop/PageTop";
import PageHeader from "../../components/PageHeader/PageHeader";
import { LocationContent } from "../../components/Location/Location";
import Footer from "../../components/Footer/Footer";
import Content from "../../containers/Content/Content";

const Location = () => {
  return (
    <>
      <PageHeader>Ubicación</PageHeader>
      <Content>
        <LocationContent />
      </Content>
    </>
  );
};

export default Location;
