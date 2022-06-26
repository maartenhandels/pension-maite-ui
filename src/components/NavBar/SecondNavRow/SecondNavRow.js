import React from "react";

import classes from "./SecondNavRow.module.css";

import NavItem from "./SecondNavRowItem/SecondNavRowItem";
import Button from "../../UI/Button/Button";
import { siteMap } from "../../../Routes";

const SecondNavRow = () => {
  const navItems = ["Inicio", "Habitaciones", "Ubicación", "Contacto"];

  return (
    <nav className={classes.NavBar}>
      <div className={classes.NavItemsWrapper}>
        <img
          src="images/logos/logo-pension-maite.png"
          className={classes.Logo}
          alt="logo"
        />
        <ul className={classes.NavItems}>
          {Object.keys(siteMap).map((key) => (
            <NavItem
              key={key}
              label={siteMap[key].title}
              path={siteMap[key].path}
            />
          ))}
        </ul>
      </div>

      <div className={classes.BookBtnWrapper}>
        <Button className={classes.BookBtn}>
          <span>RESERVAR</span>
        </Button>
      </div>
    </nav>
  );
};

export default SecondNavRow;
