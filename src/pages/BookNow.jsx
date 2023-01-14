import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

function BookNow() {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynamic>Book Now</Hero>
    </Fragment>
  );
}

export default BookNow;
