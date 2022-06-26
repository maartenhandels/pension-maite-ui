import React from "react";

import classes from "./SecondNavRowItem.module.css";

const SecondNavRowItem = ({ label }) => {
  return <li className={classes.option}>{label}</li>;
};

export default SecondNavRowItem;
