import React from "react";

import classes from "./TextArea.module.css";

const TextArea = ({ name, label, value, onChangeHandler }) => {
  return (
    <div className={classes.TextArea}>
      <label htmlFor={name}>{label}</label>
      <textarea
        className={classes.Comment}
        name={name}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
