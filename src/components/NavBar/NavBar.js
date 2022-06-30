import React from "react";

import FirsNavRow from "./FirstNavRow/FirsNavRow";
import SecondNavRow from "./SecondNavRow/SecondNavRow";

const NavBar = ({ hideBookBtn = false }) => {
  return (
    <>
      <FirsNavRow />
      <SecondNavRow hideBookBtn={hideBookBtn} />
    </>
  );
};

export default NavBar;
