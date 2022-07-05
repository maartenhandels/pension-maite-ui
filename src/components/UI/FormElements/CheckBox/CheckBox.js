import React from "react";

import classes from "./CheckBox.module.css";

const CheckBox = ({ name, label, value, onChangeHandler }) => {
  return (
    <div className={classes.CheckBox}>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
