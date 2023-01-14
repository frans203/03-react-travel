import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

function Pricing() {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynamic>Pricing</Hero>
    </Fragment>
  );
}

export default Pricing;
