import React from "react";

import classes from "./Description.module.css";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import Header from "../../UI/SectionHeader/SectionHeader";

const Description = () => {
  return (
    <FlexCenter className={classes.Description}>
      <img
        className={classes.DescriptionImage}
        src="images/description/collage.png"
        alt="Pension maite donostia"
      />
      <div className={classes.DescriptionText}>
        <Header>LA PENSIÓN MAITE</Header>
        <p>
          La Pensión Maite** se encuentra ubicada en el{" "}
          <b> barrio de Amara de Donostia-San Sebastián </b> junto a el área
          deportiva de Anoeta-Illumbe, muy cerca de la zona de hospitales y a un
          paso de las estaciones de Euskotren, (San Sebastián – Francia), y de
          autobuses.
        </p>
        <p>
          Está situada en la <b>Avenida de Madrid</b>, junto a la entrada y
          salida de la ciudad y a pocos minutos andando de la playa de La
          Concha.
        </p>
        <p>
          Se ubica en una zona comercial que cuenta con todos los servicios
          necesarios, (comercios, bares, restaurantes, áreas de aparcamiento de
          larga duración, etc).'
        </p>
        <p>
          Bien comunicada con el resto de la ciudad gracias al servicio
          continuado de autobuses urbanos que tienen parada en la puerta de la
          pensión.'
        </p>
      </div>
    </FlexCenter>
  );
};

export default Description;
