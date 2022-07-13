import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./FirsNavRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseRolling } from "@fortawesome/free-solid-svg-icons";

import LanguagePicker from "../../LanguagePicker/LanguagePicker";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

const FirsNavRow = () => {
  const { t } = useTranslation(null, { keyPrefix: "navBar.firstRow" });

  return (
    <div className={classes.container}>
      <Link to="/my-reservation">
        <Button className={classes.ReservationBtn}>
          <FontAwesomeIcon
            className={classes.reservationIcon}
            icon={faSuitcaseRolling}
          />
          {t("myReservation")}
        </Button>
      </Link>
      <LanguagePicker />
    </div>
  );
};

export default FirsNavRow;
