import classes from './Certs.module.css'
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import React, { Fragment } from 'react'
import javascriptCert from "../assets/certs/javascript-cert.jpeg";
import reactCert from '../assets/certs/react-cert.jpeg'
import typescriptCert from "../assets/certs/typescript-cert.jpeg";
import htmlCert from "../assets/certs/html-css-sass-cert.jpeg";
import nodeCert from "../assets/certs/node-cert.jpeg";

const certs = () => {
    return (
      <Fragment>
     
        <div className={classes.certs}>
          <div className={classes["certs-container"]}></div>
          <h1>Certifications</h1>
          <img
            className={classes.cert}
            src={reactCert}
            alt="react certification"
          />
          <img
            className={classes.cert}
            src={javascriptCert}
            alt="javascript certification"
          />
          <img
            className={classes.cert}
            src={typescriptCert}
            alt="react certification"
          />
          <img
            className={classes.cert}
            src={htmlCert}
            alt="react certification"
          />
          <img
            className={classes.cert}
            src={nodeCert}
            alt="react certification"
          />
          <Link className={classes.link} to="/home">Return to Main Page</Link>
        </div>
      </Fragment>
    );
}

export default certs
