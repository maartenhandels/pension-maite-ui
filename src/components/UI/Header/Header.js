import React from "react";

import classes from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <h3 className={classes.Header}>
      <span>{children}</span>
    </h3>
  );
};

export default Header;
