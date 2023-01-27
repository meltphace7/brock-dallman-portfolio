import React from "react";
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

const Skills: React.FC = () => {
  return (
    <section className={classes["skills-section"]}>
      <h1>My Skills</h1>
      <div className={classes["skills-container"]}>
        <div className={classes["skills-overview"]}>
          <p>
            I specialize in creating fully responsive applications utilizing the
            MERN stack. MongoDB, Express, React and Node. In this configuration,
            a React front end communicates with a decoupled REST API (backend).
          </p>
        </div>
        <div className={classes["skills-display-container"]}>
          <div className={classes["skills-display-backend"]}>
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
                <SiMongodb className={classes["icon"]} size={20} />
                <p>Mongoose</p>
              </div>
            </div>
          </div>
          <div className={classes["skills-display-frontend"]}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
