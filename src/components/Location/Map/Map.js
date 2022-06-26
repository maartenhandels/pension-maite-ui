import React from "react";

import classes from "./Map.module.css";
import {
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import SectionHeader from "../../UI/SectionHeader/SectionHeader";

const Map = () => {
  return (
    <div className={classes.Map}>
      <SectionHeader>Dónde Estamos</SectionHeader>
      <FlexCenter className={classes.Content}>
        <div className={classes.Section}>
          <div className={classes.GoogleMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1451.7664961756554!2d-1.9757559722400677!3d43.30310078257303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe839835a679aa0a4!2sPensi%C3%B3n%20Maite!5e0!3m2!1ses!2ses!4v1611139347685!5m2!1ses!2ses"
              frameborder={0}
              className={classes.Iframe}
              style={{ border: 0 }}
              aria-hidden={false}
              tabindex={0}
            />
          </div>
        </div>
        <div className={classes.Section}>
          <h4 className={classes.AddressHeader}>Pension Maite **</h4>
          <div className={classes.Address}>
            <div>
              <FontAwesomeIcon icon={faGlobe} />
              &nbsp; Avenida de Madrid, 19
            </div>
            <div>
              <FontAwesomeIcon icon={faGlobe} />
              &nbsp; 20011, Donostia-San Sebastián, Gipuzkoa
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;
              <a href="tel:+34943470715">(+34) 943 470715</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp;
              <a href="">info@pensionmaite.com</a>
            </div>
          </div>
          <p className={classes.AddressDescription}>
            Perfectamente comunicado, enfrente de paradas de autobús y euskotren
            que conectan con el centro de la ciudad, hospitales y estaciones de
            tren y autobús. A 20 minutos en coche desde el Aeropuerto de San
            Sebastián (EAS).
          </p>
        </div>
      </FlexCenter>
    </div>
  );
};

export default Map;
