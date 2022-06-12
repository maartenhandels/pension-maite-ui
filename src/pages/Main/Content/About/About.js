import React from "react";

import classes from "./About.module.css";

import Description from "../../../../components/Description/Description";
import Benefits from "../../../../components/Benefits/Benefits";
import Reviews from "../../../../components/Reviews/Reviews";

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
