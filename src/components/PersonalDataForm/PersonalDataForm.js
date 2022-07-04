import React from "react";

import classes from "./PersonalDataForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import Card from "../UI/Card/Card";

const PersonalDataForm = () => {
  return (
    <div className={classes.PersonalDataForm}>
      <div className={classes.FormField}>
        <span>Primer Nombre:</span>
        <input type="text" />
      </div>
      <div className={classes.FormField}>
        <span>Apellidos:</span>
        <input type="text" />
      </div>
      <div className={classes.FormField}>
        <span>Email:</span>
        <div className={classes.InputWrapper}>
          <div className={classes.InputIconWrapper}>
            <FontAwesomeIcon icon={faEnvelope} className={classes.InputIcon} />
          </div>
          <input type="email" />
        </div>
      </div>
      <div className={classes.FormField}>
        <span>Teléfono:</span>
        <div className={classes.InputWrapper}>
          <div className={classes.InputIconWrapper}>
            <FontAwesomeIcon icon={faPhone} className={classes.InputIcon} />
          </div>
          <input type="tel" />
        </div>
      </div>
      <div className={classes.FormField}>
        <span>Comentario:</span>
        <textarea className={classes.Comment} />
      </div>
      <div className={classes.CheckBox}>
        <input type="checkbox" />
        <span>Confirmo que tengo +18 años</span>
      </div>
    </div>
  );
};

export default PersonalDataForm;
