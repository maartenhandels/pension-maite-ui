import React from "react";

import classes from "./LanguageOption.module.css";

import { useTranslation } from "react-i18next";

const LanguageOption = ({ language = "es", label, imageFileName, imageAlt }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(language);
  };

  return (
    <li className={classes.LanguageOption} onClick={changeLanguage}>
      <img
        src={`/images/flags/${imageFileName}`}
        alt={imageAlt}
        className={classes.flag}
      />
      {label}
    </li>
  );
};

export default LanguageOption;
