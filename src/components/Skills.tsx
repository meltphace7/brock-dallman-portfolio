import React from "react";
import { Link } from "react-router-dom";
import classes from "./Skills.module.css";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from 'react-icons/si'
import Icon from "../assets/images/mongoose.js";

const Skills: React.FC = () => {
  return (
    <section id="expertise" className={classes["skills-section"]}>
      <h1>Expertise</h1>
      <div className={classes["skills-container"]}>
        <div className={classes["skills-overview"]}>
          <p>
            I specialize in designing and creating fully responsive applications
            utilizing the NextJS framework as well as the MERN stack. MongoDB, Express, React and Node. In this
            configuration, a React front end communicates with a decoupled REST
            API (backend) which in turn, manages data on a database(MongoDB). I
            strive to make all my projects completely responsive so they look
            great on any device. As well as coding I have some Adobe
            Illustrator/Inkscape skills and can create custom logos and icons to
            incorporate into my designs. I love learning new things and am on a
            constant quest to broaden my skill set. My certifications can be
            found{" "}
            <Link className={classes.link} to="/certs">
              here
            </Link>{" "}
            and you can find my project repos on{" "}
            <a className={classes.link} href="https://github.com/meltphace7">
              Github
            </a>
          </p>
        </div>
        <div className={classes["skills-display-container"]}>
          <div className={classes["skills-display-frontend"]}>
            <h3>Frontend</h3>
            <div className={classes["skills-display-frontend-container"]}>
              <div className={classes["skills-col"]}>
                <div className={classes["skill"]}>
                  <SiJavascript className={classes["icon"]} size={20} />
                  <p>Javascript</p>
                </div>
                <div className={classes["skill"]}>
                  <SiTypescript className={classes["icon"]} size={20} />
                  <p>Typescript</p>
                </div>
                <div className={classes["skill"]}>
                  <SiReact className={classes["icon"]} size={20} />
                  <p>React</p>
                </div>
                <div className={classes["skill"]}>
                  <SiRedux className={classes["icon"]} size={20} />
                  <p>Redux</p>
                </div>
              </div>
              <div className={classes["skills-col"]}>
                <div className={classes["skill"]}>
                  <SiHtml5 className={classes["icon"]} size={20} />
                  <p>HTML</p>
                </div>
                <div className={classes["skill"]}>
                  <SiCss3 className={classes["icon"]} size={20} />
                  <p>CSS</p>
                </div>
                <div className={classes["skill"]}>
                  <SiSass className={classes["icon"]} size={20} />
                  <p>SASS</p>
                </div>
                <div className={classes["skill"]}>
                  <SiNextdotjs className={classes["icon"]} size={20} />
                  <p>NextJS</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["skills-display-backend"]}>
            <h3>Backend</h3>
            <div className={classes["skills-display-backend-container"]}>
              <div className={classes["skills-col"]}>
                <div className={classes["skill"]}>
                  <FaNodeJs className={classes["icon"]} size={20} />
                  <p>NodeJs</p>
                </div>
                <div className={classes["skill"]}>
                  <FaNodeJs className={classes["icon"]} size={20} />
                  <p>Express</p>
                </div>
                <div className={classes["skill"]}>
                  <SiMongodb className={classes["icon"]} size={20} />
                  <p>MongoDB</p>
                </div>
                <div className={classes["skill"]}>
                  <Icon />
                  <p>Mongoose</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
