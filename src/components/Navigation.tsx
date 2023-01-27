import React from "react";
import {Link} from 'react-scroll'
import classes from "./Navigation.module.css";
import logo from "../assets/images/BDLOGO-white.png";

const Navigation: React.FC = () => {
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
          <Link
            className={classes["nav-link"]}
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
                      className={classes["nav-link"]}
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={classes["nav-link"]}
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
