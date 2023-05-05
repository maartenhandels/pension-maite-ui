import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import classes from "./LanguagePicker.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import LanguageOption from "./LanguageOption/LanguageOption";
import Button from "../UI/Button/Button";

const LanguagePicker = () => {
  const { t } = useTranslation(null, { keyPrefix: "navBar.firstRow" });

  const [isOpen, setIsOpen] = useState(false);
  const TogglerBtnrRef = useRef();

  const toggling = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.composedPath().includes(TogglerBtnrRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const languages = [
    {
      language: "es",
      label: "Español",
      imageFileName: "spain.gif",
      imageAlt: "es",
    },
    {
      language: "en",
      label: "English",
      imageFileName: "uk.gif",
      imageAlt: "en",
    },
    {
      language: "fr",
      label: "Français",
      imageFileName: "france.gif",
      imageAlt: "fr",
    },
    {
      language: "eus",
      label: "Basque",
      imageFileName: "basque-country.gif",
      imageAlt: "eu",
    },
  ];

  return (
    <div className={`dropdown ${classes.LanguagePicker}`}>
      <Button
        className={classes.header}
        onClick={toggling}
        propRef={TogglerBtnrRef}
      >
        <FontAwesomeIcon className={classes.icon} icon={faGlobe} />
        <span>{t("languagePicker")}</span>
      </Button>
      <ul className={classes.LanguageOptions}>
        {isOpen &&
          languages.map((lang) => (
            <LanguageOption
              key={lang.language}
              language={lang.language}
              label={lang.label}
              imageFileName={lang.imageFileName}
              imageAlt={lang.imageAlt}
            />
          ))}
      </ul>
    </div>
  );
};

export default LanguagePicker;
