import React from "react";

import classes from "./NavItem.module.css";

const NavItem = ({ label }) => {
  return <li className={classes.option}>{label}</li>;
};

export default NavItem;
