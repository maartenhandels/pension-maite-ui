import React from "react";

import classes from "./PageTop.module.css";

const PageTop = ({ children }) => {
  return <div className={`w-100 ${classes.PageTop}`}>{children}</div>;
};

export default PageTop;
