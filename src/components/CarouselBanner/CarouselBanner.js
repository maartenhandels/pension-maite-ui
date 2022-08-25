import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import classes from "./CarouselBanner.module.css";

import { Carousel } from "react-bootstrap";
import Button from "../UI/Button/Button";

const CarouselBanner = () => {
  const { t } = useTranslation(null, { keyPrefix: "homePage.carousel" });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const items = [
    {
      imagePath: "images/banner/donostia.jpg",
      imageAlt: "Image of Donostia",
      header: t("header_1"),
      text: t("text_1"),
      buttonText: null,
    },
    {
      imagePath: "images/banner/room.jpg",
      imageAlt: "Image of a Room",
      header: t("header_2"),
      text: t("text_2"),
      buttonText: t("btnText"),
      buttonUrl: "/rooms",
    },
  ];

  return (
    <Carousel controls={screenWidth > 768} indicators={false} fade={true} interval={6000}>
      {items.map((item) => (
        <Carousel.Item key={item.text}>
          <img
            className={`d-block w-100 ${classes.Image}`}
            src={item.imagePath}
            alt={item.imageAlt}
          />
          <Carousel.Caption className={classes.Content}>
            <h1 className={classes.Header}>{item.header}</h1>
            {screenWidth > 768 && (
              <h3 className={classes.Text}>{item.text}</h3>) && (
                item.buttonText && (
                  <Link to={item.buttonUrl}>
                    <Button className={classes.Button}>{item.buttonText}</Button>
                  </Link>
                )
              )
            }
            
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
