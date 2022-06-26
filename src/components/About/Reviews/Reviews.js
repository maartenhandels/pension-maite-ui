import React from "react";

import classes from "./Reviews.module.css";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import Header from "../../UI/SectionHeader/SectionHeader";
import GoogleScore from "./GoogleScore/GoogleScore";
import GoogleReviews from "./GoogleReviews/GoogleReviews";

const Reviews = () => {
  const reviews = [
    {
      user: "Alfredo García",
      url: "https://goo.gl/maps/L496gyKw6M2uwpMo8",
      stars: 5,
      comment:
        "Genial para alojarse. Camas muy cómodas y habitaciones amplias, con tv, armario empotrado y baño completo.Todo muy limpio y a buen precio. Bien ubicado y con buena conexión de buses.",
    },
    {
      user: "Arturo Vidarte",
      url: "https://goo.gl/maps/kNzyTog3ExwvshmG6",
      stars: 5,
      comment: "Habitaciones limpias y buen trato. Recomendable",
    },
    {
      user: "Cesar Gil",
      url: "https://goo.gl/maps/rftEz9ZrLRinXu817",
      stars: 4,
      comment:
        "Pensión (más bien pisos) limpia con duchas buenas con mamparas. Trato familiar. Buen precio en una ciudad cara para pernoctar.",
    },
    {
      user: "Eider Viguri",
      url: "https://goo.gl/maps/h9B2cnedcuxiHSnN7",
      stars: 5,
      comment: "Un alojamiento cómodo,  muy limpio,y buena atención.",
    },
    {
      user: "Terry Bogard",
      url: "https://goo.gl/maps/dwiZBEWza1Yjxmv47",
      stars: 4,
      comment:
        "Buen trato y buena limpieza...perfecto para pasar unos días en San Sebastián",
    },
  ];

  return (
    <>
      <Header>Lo que opinan nuestros clientes</Header>
      <FlexCenter>
        <GoogleScore />
        <GoogleReviews reviews={reviews} />
      </FlexCenter>
    </>
  );
};

export default Reviews;
