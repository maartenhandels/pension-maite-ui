import React from "react";

import classes from "./Discount.module.css";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const Discount = () => {
  return (
    <Card className={classes.Discount}>
      <h5>Codigo Promocional</h5>
      <hr />
      <div className={classes.Input}>
        <input type="text" />
        <Button className={classes.Button}>Validar</Button>
      </div>
    </Card>
  );
};

export default Discount;
