import React from "react";

import classes from "./SecondNavRowItem.module.css";

import { NavLink } from "react-router-dom";

const SecondNavRowItem = ({ label, path }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${classes.option} ${isActive ? classes.active : ""}`
      }
      to={path}
    >
      {label}
    </NavLink>
  );
};

export default SecondNavRowItem;
