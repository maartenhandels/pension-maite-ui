import React from "react";

import classes from "./Step2.module.css";

import ReturnButton from "../../../components/UI/ReturnButton/ReturnButton";
import Card from "../../../components/UI/Card/Card";
import PersonalDataForm from "../../../components/PersonalDataForm/PersonalDataForm";
import Button from "../../../components/UI/Button/Button";

const Step2 = ({ reservationData, decrementStepHandler }) => {
  return (
    <div className={classes.Step2}>
      <div className={classes.ReturnButton}>
        <ReturnButton onClickHandler={decrementStepHandler} />
      </div>
      <div className={classes.Content}>
        <PersonalDataForm className={classes.PersonalDataForm} />
        <div className={classes.SideBar}>
          <h1>SideBar</h1>
        </div>
      </div>
    </div>
  );
};

export default Step2;
