import React from "react";

import classes from "./Step2.module.css";

import ReturnButton from "../../../components/UI/ReturnButton/ReturnButton";
import PersonalDataForm from "../../../components/ReservationItems/PersonalDataForm/PersonalDataForm";
import Cart from "../../../components/ReservationItems/Cart/Cart";
import Price from "../../../components/ReservationItems/Price/Price";

const Step2 = ({
  reservationData,
  incrementStepHandler,
  decrementStepHandler,
}) => {
  const submitForm = (formData) => {
    if (formData) {
      reservationData["personalData"] = formData;
      incrementStepHandler(reservationData);
    } else {
      window.alert("Form is incomplete");
    }
  };
  return (
    <div className={classes.Step2}>
      <div className={classes.ReturnButton}>
        <ReturnButton onClickHandler={decrementStepHandler} />
      </div>
      <div className={classes.Content}>
        <PersonalDataForm
          className={classes.PersonalDataForm}
          onFormSubmit={submitForm}
        />
        <div className={classes.SideBar}>
          <Cart cartItems={reservationData?.cartItems} />
          <Price
            totalPrice={reservationData?.totalPrice}
            discount={reservationData?.discount}
            decrementStepHandler={decrementStepHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
