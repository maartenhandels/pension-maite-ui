import React from "react";

import classes from "./About.module.css";

import Description from "./Description/Description";
import Benefits from "./Benefits/Benefits";
import Reviews from "./Reviews/Reviews";

const About = () => {
  return (
    <div className={classes.About}>
      <Description />
      <Benefits />
      <Reviews />
    </div>
  );
};

export default About;
