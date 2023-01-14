import React, { Fragment } from "react";
import Hero from "../components/Hero/Hero";
import LocationsComponent from "../components/Locations/Locations";
import useScrollToTop from "../hooks/useScrollToTop";
function Locations() {
  useScrollToTop();
  return (
    <Fragment>
      <Hero isDynamic>Locations</Hero>
      <LocationsComponent page={true} />
    </Fragment>
  );
}

export default Locations;
