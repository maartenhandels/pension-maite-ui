import React from "react";

import classes from "./PageHeader.module.css";

const PageHeader = ({ children }) => {
  return (
    <div className={classes.PageHeader}>
      <h1>{children}</h1>
    </div>
  );
};

export default PageHeader;
