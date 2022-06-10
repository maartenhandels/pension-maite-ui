import React from "react";

import classes from "./TopNavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";

import LanguagePicker from "../LanguagePicker/LanguagePicker";
import Button from "../UI/Button/Button";

const TopNavBar = () => {
  return (
    <div className={classes.container}>
      <Button>
        <FontAwesomeIcon
          className={classes.reservationIcon}
          icon={faSuitcaseRolling}
        />
        Mi reserva
      </Button>
      <LanguagePicker />
    </div>
  );
};

export default TopNavBar;
