import React from "react";

import classes from "./FormInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormInput = ({ name, type, label, value, onChangeHandler, icon }) => {
  const inputElement = icon ? (
    <div className={classes.InputWrapper}>
      <div className={classes.InputIconWrapper}>
        <FontAwesomeIcon icon={icon} className={classes.InputIcon} />
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );

  return (
    <div className={classes.FormField}>
      <label htmlFor={name}>{label}</label>
      {inputElement}
    </div>
  );
};

export default FormInput;
