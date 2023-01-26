import React from "react";
import classes from "./BioSection.module.css";
import BioPic from "../assets/images/seven-gables_brock.jpeg";

const BioSection = () => {
  return (
      <section
          id="about"
          className={classes["bio-section"]}>
      <h1>About Me</h1>
      <div className={classes["bio-container"]}>
        <div className={classes["bio-text"]}>
          <p>
            Hello! My name is Brock and I am a self taught web developer. As a
            photographer and illustrator, I wanted to learn how to make my own
            websites to display my work in a way that would give me absolute
            control over the design and user experience. I quickly became
            enthralled in the process and decided to pursue web development as a
            career path.
          </p>
          <p>
            I decided to start taking Udemy courses to expand my knowledge and
            skill set. Since learning Javascript, Node, MongoDB, Express and the
            React framework, I have been designing and coding a multitude of
            projects, always prioritizing a responsive and user friendly design.
            My projects have included features such as online stores, user
            signup, login, accounts, authentication, admin privileges, CRUD
            operations, image uploads to AWS S3 buckets and more.
          </p>
          <p>
            {" "}
            I look forward to collaborating with you to create awesome,
            responsive and intuitive websites and applications that deliver a
            great user experience!
          </p>
        </div>
        <img src={BioPic} alt="Brock Dallman" />
      </div>
    </section>
  );
};

export default BioSection;