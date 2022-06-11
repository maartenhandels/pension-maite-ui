import React from "react";

import classes from "./FlexCenter.module.css";

const FlexCenter = ({ children, className }) => {
  return <div className={`${classes.FlexCenter} ${className}`}>{children}</div>;
};

export default FlexCenter;
