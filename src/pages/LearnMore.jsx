import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

function LearnMore() {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynamic>Learn More</Hero>
    </Fragment>
  );
}

export default LearnMore;
