import React, { Fragment } from "react";
import classes from "./Hero.module.scss";
import coverVID from "./../../assets/cover.mp4";
import Button from "../../UI/Button/Button";

const HomePageContent = () => {
  return (
    <Fragment>
      <h1 className={classes.hero__content__title}>The Tropics are Waiting</h1>
      <span className={classes.hero__content__tagline}>
        Let us know when you're finished packing
      </span>
      <p className={classes.hero__content__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel.
      </p>
      <div className={classes.hero__content__cta}>
        <Button to="/booknow">Book Now</Button>
        <Button outline to="/learnmore">
          Learn More
        </Button>
      </div>
    </Fragment>
  );
};

function Hero({ isDynamic, children }) {
  return (
    <div className={classes.container}>
      <video
        autoPlay
        muted
        loop
        className={classes.video}
        id={"video"}
        src={coverVID}
      ></video>
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          {!isDynamic && <HomePageContent />}
          {isDynamic && (
            <h1 className={classes.hero__content__title}>{children}</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
