import React, { useState } from "react";

import classes from "./LanguagePicker.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import LanguageOption from "./LanguageOption/LanguageOption";
import Button from "../UI/Button/Button";

const LanguagePicker = () => {
  const languages = [
    {
      language: "Español",
      imageFileName: "spain.gif",
      imageAlt: "es",
    },
    {
      language: "English",
      imageFileName: "uk.gif",
      imageAlt: "en",
    },
    {
      language: "Français",
      imageFileName: "france.gif",
      imageAlt: "fr",
    },
    {
      language: "Basque",
      imageFileName: "basque-country.gif",
      imageAlt: "eu",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <div className={`dropdown ${classes.LanguagePicker}`}>
      <Button className={classes.header} onClick={toggling}>
        <FontAwesomeIcon className={classes.icon} icon={faGlobe} />
        Idioma
      </Button>
      <ul className={classes.LanguageOptions}>
        {isOpen &&
          languages.map((lang) => (
            <LanguageOption
              key={lang.language}
              language={lang.language}
              imageFileName={lang.imageFileName}
              imageAlt={lang.imageAlt}
            />
          ))}
      </ul>
    </div>
  );
};

export default LanguagePicker;
