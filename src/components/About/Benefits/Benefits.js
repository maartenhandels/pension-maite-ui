import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(null, { keyPrefix: "homePage.about.benefits" });

  const benefits = [
    {
      icon: faWifi,
      header: t("header_1"),
      text: t("text_1"),
    },
    {
      icon: faClock,
      header: t("header_2"),
      text: t("text_2"),
    },
    {
      icon: faCalendarAlt,
      header: t("header_3"),
      text: t("text_3"),
    },
    {
      icon: faMapMarkerAlt,
      header: t("header_4"),
      text: t("text_4"),
    },
  ];
  return (
    <div>
      <Header>{t("section_header")}</Header>
      <FlexCenter className={classes.Benefits}>
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
