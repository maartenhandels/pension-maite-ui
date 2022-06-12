import React from "react";

import classes from "./GoogleScore.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasFaStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";

const GoogleScore = () => {
  return (
    <div className={classes.GoogleScore}>
      <FlexCenter>
        <img src="images/reviews/google.png" className={classes.Image} />
      </FlexCenter>
      <div className={classes.Stars}>
        <p>
          <FontAwesomeIcon icon={fasFaStar} />
          <FontAwesomeIcon icon={fasFaStar} />
          <FontAwesomeIcon icon={fasFaStar} />
          <FontAwesomeIcon icon={fasFaStar} />
          <FontAwesomeIcon icon={farFaStar} /> - <b> 4,2 </b>{" "}
        </p>
      </div>
      <div className={classes.Text}>
        <span>
          Basado en&nbsp;
          <a href="https://www.google.com/travel/hotels/entity/CgsIpMHqvKbr4JzoARAB/reviews?g2lb=2502548%2C2503770%2C2503780%2C4258168%2C4270442%2C4306835%2C4317915%2C4328159%2C4371335%2C4401769%2C4419364%2C4463666%2C4466980%2C4482194%2C4482438%2C4486153%2C4491350%2C4511371%2C4270859%2C4284970%2C4291517&hl=es-ES&gl=es&rp=EKTB6rym6-Cc6AE4AkAASAHAAQI&ictx=1&ved=0CAAQ5JsGahcKEwjoteCokaTvAhUAAAAAHQAAAAAQBA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpICioSJjIkMHhkNTFhZmYxY2UzZDJmMDU6MHhlODM5ODM1YTY3OWFhMGE0GgASGhIUCgcI5Q8QAxgLEgcI5Q8QAxgMGAEyAhAAKgQKABoA">
            98 reseñas
          </a>
        </span>
      </div>
    </div>
  );
};

export default GoogleScore;
