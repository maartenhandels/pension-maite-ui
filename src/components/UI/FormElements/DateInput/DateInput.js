import React from "react";

import classes from "./DateInput.module.css";

const DateInput = ({ refProp, name, label, value, onChangeHandler, minDate, isValid = true, className }) => {
  return (
    <div className={`${classes.DateInput} ${className}`} ref={refProp}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="date"
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        className={isValid ? "" : classes.Error}
        min={minDate}
      />
    </div>
  );
};

export default DateInput;
