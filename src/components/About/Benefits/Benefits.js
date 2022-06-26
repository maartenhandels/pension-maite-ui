import React from "react";

import classes from "./Benefits.module.css";
import {
  faWifi,
  faClock,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import BenefitsItem from "./BenefitsItem/BenefitsItem";
import Header from "../../UI/SectionHeader/SectionHeader";

const Benefits = () => {
  const benefits = [
    {
      icon: faWifi,
      header: "Wifi gratuito",
      text: "La Pensión Maite ofrece Wifi gratuito para los clientes en toda la instalación.",
    },
    {
      icon: faClock,
      header: "Horario flexible",
      text: "A pesar de que los horarios de entrada y salida estén definidos, siempre se pueden ajustar a sus necesidades previo aviso al establecimiento.",
    },
    {
      icon: faCalendarAlt,
      header: "Reserva directa",
      text: "Es posible realizar la reserva directamente desde la página web o contactando con la Pensión Maite.",
    },
    {
      icon: faMapMarkerAlt,
      header: "Buena ubicación",
      text: "Tiene una ubicación excepcional, bien comunicada con toda la ciudad y en un barrio que dispone de todos los servicios necesarios.",
    },
  ];
  return (
    <div>
      <Header>¿Qué me ofrece?</Header>
      <FlexCenter>
        {benefits.map((benefit) => (
          <BenefitsItem
            key={benefit.header}
            icon={benefit.icon}
            header={benefit.header}
            text={benefit.text}
          />
        ))}
      </FlexCenter>
    </div>
  );
};

export default Benefits;
