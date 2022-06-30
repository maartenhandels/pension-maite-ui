import React from "react";

import classes from "./Price.module.css";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const Price = ({ totalPrice = 0 }) => {
  return (
    <Card className={classes.Price}>
      <span>IVA INCLUIDO</span>
      <span>
        <b>TOTAL: {totalPrice} €</b>
      </span>
      <Button className={classes.Button}>Siguiente</Button>
    </Card>
  );
};

export default Price;
