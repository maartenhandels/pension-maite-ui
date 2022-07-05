import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className={`btn ${classes.Button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
