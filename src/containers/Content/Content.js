import React from "react";

import classes from "./Content.module.css";

const Content = ({ className, children }) => {
  return <div className={`${classes.Content} ${className}`}>{children}</div>;
};

export default Content;
