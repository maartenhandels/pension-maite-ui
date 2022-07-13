import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Description.module.css";

import FlexCenter from "../../../containers/FlexCenter/FlexCenter";
import Header from "../../UI/SectionHeader/SectionHeader";

const Description = () => {
  const { t } = useTranslation(null, { keyPrefix: "homePage.about.description" });

  return (
    <FlexCenter className={classes.Description}>
      <img
        className={classes.DescriptionImage}
        src="images/description/collage.png"
        alt="Pension maite donostia"
      />
      <div className={classes.DescriptionText}>
        <Header>LA PENSIÓN MAITE</Header>
        <p dangerouslySetInnerHTML={{ __html: t("paragraph_1") }} />
        <p dangerouslySetInnerHTML={{ __html: t("paragraph_2") }} />
        <p dangerouslySetInnerHTML={{ __html: t("paragraph_3") }} />
        <p dangerouslySetInnerHTML={{ __html: t("paragraph_4") }} />
      </div>
    </FlexCenter>
  );
};

export default Description;
