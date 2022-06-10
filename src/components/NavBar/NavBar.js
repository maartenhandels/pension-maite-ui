import React from "react";

import classes from "./NavBar.module.css";

import NavItem from "./NavItem/NavItem";
import Button from "../UI/Button/Button";

const NavBar = () => {
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
          {navItems.map((item) => (
            <NavItem key={item} label={item} />
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

export default NavBar;
