import React from "react";

import classes from "./Button.module.css";

const Button = ({ children, onClick, disabled, className, propRef }) => {
  return (
    <button
      className={`btn ${classes.Button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      ref={propRef}
    >
      {children}
    </button>
  );
};

export default Button;
