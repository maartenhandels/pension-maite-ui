import React from "react";

import classes from "./Price.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const Price = ({ totalPrice = 0, discount = 0, isCartEmpty = true }) => {
  return (
    <Card className={classes.Price}>
      <span>IVA INCLUIDO</span>
      <div className={classes.PriceText}>
        <span>TOTAL: </span>&nbsp;
        {discount > 0 ? (
          <div>
            <span className={classes.OldPrice}>&nbsp;{totalPrice}€</span>&nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
            <span className={classes.NewPrice}>
              &nbsp;{(totalPrice * (1 - discount / 100)).toFixed(2)}€
            </span>
          </div>
        ) : (
          <span>
            <b>{totalPrice}€</b>
          </span>
        )}
      </div>
      <Button className={classes.Button} disabled={isCartEmpty}>
        Siguiente
      </Button>
    </Card>
  );
};

export default Price;
