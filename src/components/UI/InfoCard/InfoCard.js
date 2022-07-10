import React from "react";

import classes from "./InfoCard.module.css";

import Card from "../Card/Card";

const InfoCard = ({ children, className }) => {
  return <Card className={`${classes.Info} ${className}`}>{children}</Card>;
};

export default InfoCard;
