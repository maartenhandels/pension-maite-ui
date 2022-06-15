import React from "react";

import classes from "./Footer.module.css";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.TopSection}>
        <h2 className={classes.Header}>Pensión Maite **</h2>
        <h5 className={classes.Header}>Donostia / San Sebastián</h5>

        <a href="tel:+34943470715" className={classes.Link}>
          <FontAwesomeIcon icon={faPhoneAlt} />
          &nbsp;(+34) 943 470 715
        </a>
        <span className={classes.TextSeparator}>|</span>
        <a href="#" className={classes.Link}>
          <FontAwesomeIcon icon={faEnvelope} /> &nbsp;info@pensionmaite.com
        </a>
        <span className={classes.TextSeparator}>|</span>
        <a href="#" className={classes.Link}>
          Preguntas Frecuentes
        </a>
      </div>

      <hr className={classes.LineSeparator} />
      <div className={classes.BottomSection}>
        <p>Copyright &copy; 2021. Pensión Maite.</p>
      </div>
    </div>
  );
};

export default Footer;
