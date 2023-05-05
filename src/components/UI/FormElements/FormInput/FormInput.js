import React, { useState } from "react";

import classes from "./FormInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { isValidEmail } from "../../../../utilities/dateUtilities";

const FormInput = ({
  name,
  type = "text",
  label,
  value,
  onChangeHandler,
  icon,
  minLength = 1,
  maxLength = Number.MAX_SAFE_INTEGER,
  isNotValid = false,
  refProp,
  className,
}) => {
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
        className={`${classes.Input} ${isNotValid ? classes.Error : ""}`}
      />
    </div>
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
      className={`${classes.Input} ${isNotValid ? classes.Error : ""}`}
    />
  );

  return (
    <div className={`${classes.FormField} ${className}`} ref={refProp}>
      {label && <label htmlFor={name}>{label}</label>}
      {inputElement}
    </div>
  );
};

export default FormInput;
