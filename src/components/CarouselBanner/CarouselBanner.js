import React from "react";

import classes from "./CarouselBanner.module.css";

import { Carousel } from "react-bootstrap";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const CarouselBanner = () => {
  const items = [
    {
      imagePath: "images/banner/donostia.jpg",
      imageAlt: "Image of Donostia",
      header: "Pension Maite",
      text: "Donostia / San Sebastian",
      buttonText: null,
    },
    {
      imagePath: "images/banner/room.jpg",
      imageAlt: "Image of a Room",
      header: "Pension Maite",
      text: "Visita nuestras habitaciones",
      buttonText: "Habitaciones",
      buttonUrl: "/rooms",
    },
  ];

  return (
    <Carousel controls={true} indicators={false} fade={true} interval={6000}>
      {items.map((item) => (
        <Carousel.Item key={item.text}>
          <img
            className={`d-block w-100 ${classes.Image}`}
            src={item.imagePath}
            alt={item.imageAlt}
          />
          <Carousel.Caption className={classes.Content}>
            <h1 className={classes.Header}>{item.header}</h1>
            <h3 className={classes.Text}>{item.text}</h3>
            {item.buttonText && (
              <Link to={item.buttonUrl}>
                <Button className={classes.Button}>{item.buttonText}</Button>
              </Link>
            )}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
