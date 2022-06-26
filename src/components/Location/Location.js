import React from "react";

import classes from "./Location.module.css";

import Map from "./Map/Map";
import POI from "./POI/POI";

const Location = () => {
  return (
    <div className={classes.Location}>
      <Map />
      <POI />
    </div>
  );
};

export { Location as LocationContent };
