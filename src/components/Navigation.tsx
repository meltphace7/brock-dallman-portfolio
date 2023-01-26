import React from "react";
import classes from "./Navigation.module.css";
import logo from "../assets/images/BDLOGO-white.png";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes["logo-container"]}>
        <img src={logo} alt="Brock Dallman Logo" />
      </div>
      <ul className={classes["nav-menu"]}>
        <li>
          <a className={classes["nav-link"]} href="#home">
            Home
          </a>
        </li>
        <li>
          <a className={classes["nav-link"]} href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className={classes["nav-link"]} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className={classes["nav-link"]} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
