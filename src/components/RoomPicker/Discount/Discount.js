import React, { useState } from "react";

import classes from "./Discount.module.css";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const Discount = ({ applyDiscountHandler }) => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);

  const textChangeHandler = (event) => {
    setDiscountCode(event.target.value);
  };
  const onClickHandler = () => {
    if (discountCode === "DISCOUNT") {
      setDiscountAmount(20);
      setDiscountApplied(true);
      applyDiscountHandler(20, discountCode);
    }
  };

  return (
    <Card className={classes.Discount}>
      <h5>Codigo Promocional</h5>
      <hr />
      <div className={classes.Input}>
        <input type="text" value={discountCode} onChange={textChangeHandler} />
        <Button
          className={classes.Button}
          onClick={onClickHandler}
          disabled={discountApplied}
        >
          Validar
        </Button>
      </div>
      {discountApplied && (
        <div className={classes.DiscountText}>
          {discountAmount}% DiscountApplied
        </div>
      )}
    </Card>
  );
};

export default Discount;
