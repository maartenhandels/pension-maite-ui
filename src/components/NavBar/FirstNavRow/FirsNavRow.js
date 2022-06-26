import React from "react";

import classes from "./FirsNavRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";

import LanguagePicker from "../../LanguagePicker/LanguagePicker";
import Button from "../../UI/Button/Button";

const FirsNavRow = () => {
  return (
    <div className={classes.container}>
      <Button className={classes.ReservationBtn}>
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

export default FirsNavRow;
