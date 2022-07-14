import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import classes from "./Discount.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const Discount = ({ applyDiscountHandler }) => {
  const { t } = useTranslation(null, { keyPrefix: "reservationPage.discount" });

  const [discountCode, setDiscountCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);

  const textChangeHandler = (event) => {
    setDiscountCode(event.target.value);
  };
  const onClickHandler = () => {
    if (discountCode === "DISCOUNT") {
      setInvalidCode(false);
      setDiscountAmount(20);
      setDiscountApplied(true);
      applyDiscountHandler(20, discountCode);
    } else {
      setInvalidCode(true);
    }
  };

  return (
    <Card className={classes.Discount}>
      <div className={classes.Header}>
        <FontAwesomeIcon icon={faTag} className={classes.Icon} />
        <h4>{t("header")}</h4>
      </div>
      <hr />
      <div className={classes.Input}>
        <input type="text" value={discountCode} onChange={textChangeHandler} />
        <Button
          className={classes.Button}
          onClick={onClickHandler}
          disabled={discountApplied}
        >
          {t("btnText")}
        </Button>
      </div>
      {discountApplied && (
        <div className={classes.DiscountText}>
          {discountAmount}% {t("discountAppliedMessage")}
        </div>
      )}
      {invalidCode && (
        <div className={classes.DiscountError}>{t("invalidCodeMessage")}</div>
      )}
    </Card>
  );
};

export default Discount;
