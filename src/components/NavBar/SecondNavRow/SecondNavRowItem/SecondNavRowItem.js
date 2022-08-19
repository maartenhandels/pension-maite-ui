import React from "react";

import classes from "./SecondNavRowItem.module.css";

import { NavLink } from "react-router-dom";

const SecondNavRowItem = ({ label, path, className }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${classes.option} ${isActive ? classes.active : ""} ${className}`
      }
      to={path}
    >
      {label}
    </NavLink>
  );
};

export default SecondNavRowItem;
