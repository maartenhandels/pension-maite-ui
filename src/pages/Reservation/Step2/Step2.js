import React from "react";

import classes from "./Step2.module.css";

import ReturnButton from "../../../components/UI/ReturnButton/ReturnButton";
import PersonalDataForm from "../../../components/ReservationItems/PersonalDataForm/PersonalDataForm";
import Cart from "../../../components/ReservationItems/Cart/Cart";
import Price from "../../../components/ReservationItems/Price/Price";

import { API_BASE_URL } from "../../../config/config";

const Step2 = ({
  reservationData,
  incrementStepHandler,
  decrementStepHandler,
}) => {
  const submitForm = (formData) => {
    if (formData) {
      reservationData.personalData = formData;
      const roomTypes = {};
      reservationData.cartItems?.forEach((item) => {
        roomTypes[item.roomType] = item.quantity;
      });
      const data = {
        checkinDate: reservationData.checkinDate,
        checkoutDate: reservationData.checkoutDate,
        contactData: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        roomTypes: roomTypes,
      };

      console.log("Data: " + data);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      console.log(options);

      fetch(API_BASE_URL + "/reservation/create", options)
        .then((response) => response.json())
        .then((data) => {
          if (data?.status === "OK") {
            reservationData.confirmation = data.data;
            incrementStepHandler(reservationData);
          } else {
            console.error("API call failed");
          }
        })
        .catch((error) => {
          console.log("API call failed: " + error);
          console.error(error);
        });
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
