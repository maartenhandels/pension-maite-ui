import React from "react";

import classes from "./SectionHeader.module.css";

const SectionHeader = ({ children, className }) => {
  return (
    <h3 className={`${classes.SectionHeader} ${className}`}>
      <span>{children}</span>
    </h3>
  );
};

export default SectionHeader;
