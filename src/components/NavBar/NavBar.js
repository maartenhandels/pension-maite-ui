import React from "react";

import classes from "./NavBar.module.css";

import FirsNavRow from "./FirstNavRow/FirsNavRow";
import SecondNavRow from "./SecondNavRow/SecondNavRow";

const NavBar = ({ hideBookBtn = false }) => {
  return (
    <div className={classes.NavBar}>
      <FirsNavRow />
      <SecondNavRow hideBookBtn={hideBookBtn} />
    </div>
  );
};

export default NavBar;
