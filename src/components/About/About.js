import React from "react";

import classes from "./About.module.css";

import Description from "./Description/Description";
import Benefits from "./Benefits/Benefits";
import Reviews from "./Reviews/Reviews";
import Content from "../../containers/Content/Content";

const About = () => {
  return (
    <Content>
      <Description />
      <Benefits />
      <Reviews />
    </Content>
  );
};

export default About;
