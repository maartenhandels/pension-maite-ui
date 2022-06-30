import React from "react";

import classes from "./SecondNavRow.module.css";

import NavItem from "./SecondNavRowItem/SecondNavRowItem";
import Button from "../../UI/Button/Button";
import { navItems } from "../../../Routes";
import { Link } from "react-router-dom";

const SecondNavRow = ({ hideBookBtn = false }) => {
  return (
    <nav className={classes.NavBar}>
      <div className={classes.NavItemsWrapper}>
        <img
          src="images/logos/logo-pension-maite.png"
          className={classes.Logo}
          alt="logo"
        />
        <ul className={classes.NavItems}>
          {navItems.map((item) => (
            <NavItem key={item.title} label={item.title} path={item.path} />
          ))}
        </ul>
      </div>

      {!hideBookBtn && (
        <Link to="/book">
          <div className={classes.BookBtnWrapper}>
            <Button className={classes.BookBtn}>
              <span>RESERVAR</span>
            </Button>
          </div>
        </Link>
      )}
    </nav>
  );
};

export default SecondNavRow;
