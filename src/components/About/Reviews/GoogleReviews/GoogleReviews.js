import React, { useRef, useState, useEffect } from "react";

import classes from "./GoogleReviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Carousel } from "react-bootstrap";
import Card from "../../../UI/Card/Card";
import FlexCenter from "../../../../containers/FlexCenter/FlexCenter";
import Button from "../../../UI/Button/Button";

const GoogleReview = ({ reviews }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    console.log("Entra en useEffect");
    if (carousel !== null && carousel.current !== null) {
      console.log("Entra aqui");
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const cards = reviews.map((review) => (
    <Card className={classes.Card}>
      <a href={review.url} className={classes.User} target="_blank">
        <b>{review.user}</b>
      </a>
      <div className={classes.Stars}>
        <div>
          {[...Array(review.stars)].map((x, i) => (
            <FontAwesomeIcon icon={faStar} key={i} />
          ))}
        </div>

        <img
          src="images/reviews/google_small.png"
          className={classes.Icon}
          alt="google"
        />
      </div>
      <p className={classes.Comment}>{review.comment}</p>
    </Card>
  ));

  return (
    <>
      <Button
        className={classes.MoveBtn}
        disabled={isDisabled("prev")}
        onClick={movePrev}
      >
        &lt;
      </Button>
      <div className={classes.GoogleReview} ref={carousel}>
        {cards}
      </div>
      <Button
        className={classes.MoveBtn}
        disabled={isDisabled("next")}
        onClick={moveNext}
      >
        &gt;
      </Button>
    </>
  );
};

export default GoogleReview;
