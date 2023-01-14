import React from "react";
import Button from "../../../UI/Button/Button";
import classes from "./Nav.module.scss";
import { Link } from "react-router-dom";
function Nav({ isMenu, menuToggle }) {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <a href="/locations">Locations</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/pricing">Pricing</a>
        </li>
        <li onClick={menuToggle}>
          <a href="/learnmore">Learn More</a>
        </li>
      </ul>

      <Button to="/booknow" className={classes.bookNow} onClick={menuToggle}>
        Book Now
      </Button>
    </nav>
  );
}

export default Nav;
