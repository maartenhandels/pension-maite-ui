import React from "react";

import classes from "./Rooms.module.css";

import Page from "../../containers/Page/Page";
import PageHeader from "../../components/PageHeader/PageHeader";
import RoomTypes from "../../components/RoomTypes/RoomTypes";
import Content from "../../containers/Content/Content";
import RoomDescriptions from "../../components/RoomDescriptions/RoomDescriptions";

const Rooms = () => {
  return (
    <Page>
      <PageHeader>Habitaciones</PageHeader>
      <Content>
        <RoomTypes />
        <RoomDescriptions />
      </Content>
    </Page>
  );
};

export default Rooms;
