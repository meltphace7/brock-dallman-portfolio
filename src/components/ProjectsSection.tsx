import React from "react";
import classes from "./ProjectsSection.module.css";
import TrailTrackerIMG from "../assets/images/trail-tracker_screen-shot-1.jpg";
import BDPhotographyIMG from "../assets/images/bdphotography_screen-shot-1.jpg";
import AlpinePrintsIMG from "../assets/images/alpine-prints_screen-shots-1.jpg";
import BeerQuestIMG from "../assets/images/beer-quest_screen-shot-1.jpg";
import BDArtIMG from "../assets/images/bdart-screen-shot-1.jpg";

const ProjectsSection = () => {
  return (
    <section id="projects" className={classes["projects-section"]}>
      <h1>Projects</h1>

      <div className={classes["project"]}>
        <a
          className={classes["project-link"]}
          href="https://trailtracker.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <img src={TrailTrackerIMG} alt="trail tracker website screenshot" />
        <div className={classes["project-text"]}>
          <div className={classes["project-header"]}>
            <h3>Featured Project</h3>
            <h2>Trail Tracker</h2>
          </div>
          <div className={classes["project-description"]}>
            <p>
              Trail Tracker is a react app that allows a user to discover new
              trails as well as add their own. Each trail profile contains data
              including images, a trail description, weather data, coordinates
              and a map of the trailhead. Users can submit a trail after
              creating an account and can edit and delete their respective
              trails after submitting.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <div className={classes["project"]}>
        <div className={classes["project-text-alt"]}>
          <div className={classes["project-header-alt"]}>
            <h3>Featured Project</h3>
            <h2>Brock Dallman</h2>
            <h2>Photography</h2>
          </div>
          <div className={classes["project-description-alt"]}>
            <p>
              Brock Dallman Photography is my fully responsive, personal
              landscape photography site. There you can find photo galleries, a
              blog of my backpacking/photography adventures, an online shop and
              more.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </div>
        <a
          className={classes["project-link"]}
          href="https://brockdallmanphotography.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <img
          src={BDPhotographyIMG}
          alt="Brock Dallman Photography website screenshot"
        />
      </div>

      <div className={classes["project"]}>
        <a
          className={classes["project-link"]}
          href="https://alpineprints.vercel.app/home"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <img src={AlpinePrintsIMG} alt="Alpine Prints" />
        <div className={classes["project-text"]}>
          <div className={classes["project-header"]}>
            <h3>Featured Project</h3>
            <h2>Alpine Prints</h2>
          </div>
          <div className={classes["project-description"]}>
            <p>
              Alpine Prints is a website for a fictitious company. I designed it
              to be easily configurable to fit the needs of a small business. It
              features on online shop, user signup, login, accounts,
              authentication and administrator privileges. A business owner can
              sign in as admin and add edit and delete products, and manage
              orders.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <div className={classes["project"]}>
        <div className={classes["project-text-alt"]}>
          <div className={classes["project-header-alt"]}>
            <h3>Featured Project</h3>
            <h2>Beer Quest</h2>
          </div>
          <div className={classes["project-description-alt"]}>
            <p>
              Beer Quest is a react app that allows a user to search for
              breweries in a city. When the user selects a brewery, data is
              displayed like the phone number, address and a link to their
              website. When users click the address link, they are redirected to
              google maps with the address to the brewery pluged in. Users can
              save a brewery by adding it to thier favorites which are stored on
              their browser in local storage.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>React</li>
          </ul>
        </div>
        <a
          className={classes["project-link"]}
          href="https://beer-quest.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <img src={BeerQuestIMG} alt="Beer Quest Website screenshot" />
      </div>

      <div className={classes["project"]}>
        <a
          className={classes["project-link"]}
          href="https://brockdallmanart.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <img src={BDArtIMG} alt="Brock Dallman Art website screenshot" />
        <div className={classes["project-text"]}>
          <div className={classes["project-header"]}>
            <h3>Featured Project</h3>
            <h2>Brock Dallman Art</h2>
          </div>
          <div className={classes["project-description"]}>
            <p>
              Brock Dallman Art is my fully responsive personal website to
              display my illustrations and art. It was created prior to learning
              React and was made with pure CSS HTML and Javascript. I am
              currently in the process of creating an upgraded React version.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
