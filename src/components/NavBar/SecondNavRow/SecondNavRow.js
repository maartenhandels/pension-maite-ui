import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./SecondNavRow.module.css";

import NavItem from "./SecondNavRowItem/SecondNavRowItem";
import Button from "../../UI/Button/Button";
import { navItems } from "../../../routes/SiteMap";
import { Link } from "react-router-dom";

const SecondNavRow = ({ hideBookBtn = false }) => {
  const { t } = useTranslation(null, { keyPrefix: "navBar.secondRow" });
  return (
    <nav className={classes.NavBar}>
      <div className={classes.NavItemsWrapper}>
        <img
          src="images/logos/logo-pension-maite.png"
          className={classes.Logo}
          alt="logo"
        />
        <ul className={classes.NavItems}>
          {navItems.map((item, index) => (
            <NavItem key={index} label={t(item.labelKey)} path={item.path} />
          ))}
        </ul>
      </div>

      {!hideBookBtn && (
        <Link to="/book">
          <div className={classes.BookBtnWrapper}>
            <Button className={classes.BookBtn}>
              <span>{t("reservationBtn").toUpperCase()}</span>
            </Button>
          </div>
        </Link>
      )}
    </nav>
  );
};

export default SecondNavRow;
