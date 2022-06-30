import React from "react";

import ScrollUpArrow from "../../components/UI/ScrollUpArrow/ScrollUpArrow";
import NavBar from "../../components/NavBar/NavBar";
import PageTop from "../PageTop/PageTop";
import Footer from "../../components/Footer/Footer";

const Page = ({ children, hideBookBtn = false }) => {
  return (
    <>
      <ScrollUpArrow />
      <NavBar hideBookBtn={hideBookBtn} />
      <PageTop>
        {children}
        <Footer />
      </PageTop>
    </>
  );
};

export default Page;
