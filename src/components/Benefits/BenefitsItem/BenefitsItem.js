import React from "react";

import classes from "./BenefitsItem.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BenefitsItem = ({ icon, header, text }) => {
  return (
    <div className={classes.BenefitsItem}>
      <span className={classes.IconWrapper}>
        <FontAwesomeIcon icon={icon} className={classes.Icon} />
      </span>

      <h5 className={classes.Header}>{header}</h5>
      <p className={classes.Text}>{text}</p>
    </div>
  );
};

export default BenefitsItem;
