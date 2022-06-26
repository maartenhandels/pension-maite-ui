import React from "react";

import classes from "./Rooms.module.css";

import PageHeader from "../../components/PageHeader/PageHeader";
import RoomTypes from "../../components/RoomTypes/RoomTypes";
import Content from "../../containers/Content/Content";
import RoomDescriptions from "../../components/RoomDescriptions/RoomDescriptions";

const Rooms = () => {
  return (
    <div className={classes.Rooms}>
      <PageHeader>Habitaciones</PageHeader>
      <Content>
        <RoomTypes />
        <RoomDescriptions />
      </Content>
    </div>
  );
};

export default Rooms;
