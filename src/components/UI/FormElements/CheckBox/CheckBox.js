import React from "react";

import classes from "./CheckBox.module.css";

const CheckBox = ({
  name,
  label,
  value,
  onChangeHandler,
  error = false,
  refProp,
}) => {
  return (
    <div className={`${classes.CheckBox} `} ref={refProp}>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={() => onChangeHandler(!value)}
        className={error ? classes.Error : ""}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
