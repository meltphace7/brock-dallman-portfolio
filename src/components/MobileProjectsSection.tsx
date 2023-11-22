import React from "react";
import classes from "./MobileProjectsSection.module.css";
import TrailTrackerIMG from "../assets/images/trail-tracker_screen-shot-1.jpg";
import BDPhotographyIMG from "../assets/images/bdphotography_screen-shot-1.jpg";
import AlpinePrintsIMG from "../assets/images/alpine-prints_screen-shots-1.jpg";
import BeerQuestIMG from "../assets/images/beer-quest_screen-shot-1.jpg";
import TietonIMG from "../assets/images/TIETON_SCREENSHOT.jpg";
import BDArtIMG from "../assets/images/BDART_SCREENSHOT.jpg";

const MobileProjectsSection: React.FC = () => {
  return (
    <div className={classes["mobile-projects"]}>
      <div className={classes["project"]}>
        <a
          className={classes["project-link"]}
          href="https://trailtracker.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <div className={classes["project-header"]}>
          <h3>Featured Project</h3>
          <a
            className={classes["project-title"]}
            href="https://trailtracker.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Trail Tracker
          </a>
        </div>
        <img
          className={classes["project-img"]}
          src={TrailTrackerIMG}
          alt="trail tracker website screenshot"
        />
        <div className={classes["project-text"]}>
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
        <a
          className={classes["project-link"]}
          href="https://brockdallmanphotography.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <div className={classes["project-header"]}>
          <h3>Featured Project</h3>
          <a
            className={classes["project-title"]}
            href="https://brockdallmanphotography.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Brock Dallman</h2>
            <h2>Photography</h2>
          </a>
        </div>
        <img
          className={classes["project-img"]}
          src={BDPhotographyIMG}
          alt="Brock Dallman Photography website screenshot"
        />
        <div className={classes["project-text"]}>
          <div className={classes["project-description"]}>
            <p>
              Brock Dallman Photography is my fully responsive, personal
              landscape photography site. There you can find photo galleries, a
              blog of my backpacking/photography adventures, an online shop and
              more. Also features an admin dashboard where I can add, edit and
              delete products as well as manage orders.
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
        <a
          className={classes["project-link"]}
          href="https://alpineprints.vercel.app/home"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <div className={classes["project-header"]}>
          <h3>Featured Project</h3>
          <a
            className={classes["project-title"]}
            href="https://alpineprints.vercel.app/home"
            target="_blank"
            rel="noreferrer"
          >
            Alpine Prints
          </a>
        </div>
        <img
          className={classes["project-img"]}
          src={AlpinePrintsIMG}
          alt="Alpine Prints"
        />
        <div className={classes["project-text"]}>
          <div className={classes["project-description"]}>
            <p>
              Alpine Prints is a website for a fictitious company. I designed it
              to be easily configurable to fit the needs of a small business. It
              features on online shop, user signup, login, accounts,
              authentication and administrator dashboard/privileges. A business
              owner can sign in as admin and add, edit and delete products, and
              manage orders.
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
        <a
          className={classes["project-link"]}
          href="https://tieton-construction-nextjs.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <div className={classes["project-header"]}>
          <h3>Featured Project</h3>
          <a
            className={classes["project-title"]}
            href="https://tieton-construction-nextjs.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Tieton Construction
          </a>
        </div>
        <img
          className={classes["project-img"]}
          src={TietonIMG}
          alt="Beer Quest Website screenshot"
        />
        <div className={classes["project-text"]}>
          <div className={classes["project-description"]}>
            <p>
              Tieton Constuction is a business website made with NextJS. This
              website is totally responsive and features the standard pages
              found in a typical construction company website. It also features
              a project portfolio gallery complete with an image slider. Aside
              from the website I also designed the companies logo.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>NextJS</li>
            <li>React</li>
          </ul>
        </div>
      </div>

      <div className={classes["project"]}>
        <a
          className={classes["project-link"]}
          href="https://beer-quest.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <div className={classes["project-header"]}>
          <h3>Featured Project</h3>
          <a
            className={classes["project-title"]}
            href="https://beer-quest.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Beer Quest
          </a>
        </div>
        <img
          className={classes["project-img"]}
          src={BeerQuestIMG}
          alt="Beer Quest Website screenshot"
        />
        <div className={classes["project-text"]}>
          <div className={classes["project-description"]}>
            <p>
              Beer Quest is a React app that allows a user to search for
              breweries in a city. When the user selects a brewery, data is
              displayed like the phone number, address and a link to their
              website. When users click the address link, they are redirected to
              google maps with the address to the brewery plugged in. Users can
              save a brewery by adding it to their favorites which are stored on
              their browser in local storage.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>React</li>
          </ul>
        </div>
      </div>

      <div className={classes["project"]}>
        <a
          className={classes["project-link"]}
          href="https://brockdallmanart.com"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
        </a>
        <div className={classes["project-header"]}>
          <h3>Featured Project</h3>
          <a
            className={classes["project-title"]}
            href="https://brockdallmanart.com"
            target="_blank"
            rel="noreferrer"
          >
            Brock Dallman Art
          </a>
        </div>
        <img
          className={classes["project-img"]}
          src={BDArtIMG}
          alt="Brock Dallman Art website screenshot"
        />
        <div className={classes["project-text"]}>
          <div className={classes["project-description"]}>
            <p>
              Brock Dallman Art is my fully responsive personal art website.
              Created with NextJS, brockdallmanart.com utilizes NextJS features
              like server side rendering, file based routing, dynamic image
              optimization, improved SEO and a built in API.
            </p>
          </div>
          <ul className={classes["project-technologies"]}>
            <li>NEXTJS</li>
            <li>REACT</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectsSection;
