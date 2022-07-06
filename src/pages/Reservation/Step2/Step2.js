import React from "react";

import classes from "./Step2.module.css";

import ReturnButton from "../../../components/UI/ReturnButton/ReturnButton";
import PersonalDataForm from "../../../components/PersonalDataForm/PersonalDataForm";

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
          <h1>SideBar</h1>
        </div>
      </div>
    </div>
  );
};

export default Step2;
