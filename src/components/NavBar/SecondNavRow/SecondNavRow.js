import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import classes from "./SecondNavRow.module.css";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import NavItem from "./SecondNavRowItem/SecondNavRowItem";
import Button from "../../UI/Button/Button";
import { navItems } from "../../../routes/SiteMap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondNavRow = ({ hideBookBtn = false }) => {
  const { t } = useTranslation(null, { keyPrefix: "navBar.secondRow" });

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={classes.NavBar}>
      <div className={classes.ToggleWrapper}>
        <img
          src="images/logos/logo-pension-maite.png"
          // className={classes.Logo}
          alt="logo"
        />
        <Button className={classes.ToggleBtn} onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} className={classes.Icon} />
        </Button>
      </div>

      <div className={`${classes.NavItemsWrapper} ${toggleMenu ? classes.Open : classes.Close}`}>
        <img
          src="images/logos/logo-pension-maite.png"
          className={classes.Logo}
          alt="logo"
        />

        <FontAwesomeIcon icon={faX} className={`${classes.CloseBtn} ${toggleMenu ? classes.CloseBtn_Open : classes.CloseBtn_Close}`} onClick={toggleNav} />
        
        <ul className={classes.NavItems}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              label={t(item.labelKey)}
              path={item.path}
              className={classes.NavItem}
            />
          ))}

          {screenWidth < 769 && (
            <NavItem
              key="my-reservation"
              label={t("myReservation")}
              path="/my-reservation"
              className={classes.NavItem}
            />
          )}

        </ul>
      </div>


      {!hideBookBtn && (
        <div className={classes.BookBtnWrapper}>
          <Link to="/book">
            <Button className={classes.BookBtn}>
              <span>{t("reservationBtn").toUpperCase()}</span>
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default SecondNavRow;
