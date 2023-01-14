import React from "react";
import classes from "./Button.module.scss";
import { useHistory } from "react-router-dom";
function Button({ onClick, outline, children, to }) {
  const history = useHistory();
  return (
    <a href={to}>
      <button
        onClick={() => {
          onClick && onClick();
        }}
        className={`${classes.button} ${outline ? classes.outline : ""}`}
      >
        {children}
      </button>
    </a>
  );
}

export default Button;
