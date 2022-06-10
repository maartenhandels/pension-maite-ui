import React from "react";

import classes from "./LanguageOption.module.css";

const LanguageOption = ({ language, imageFileName, imageAlt }) => {
  console.log(`/images/flag/${imageFileName}`);
  return (
    <li className={classes.LanguageOption}>
      <img
        src={`/images/flags/${imageFileName}`}
        alt={imageAlt}
        className={classes.flag}
      />
      {language}
    </li>
  );
};

export default LanguageOption;
