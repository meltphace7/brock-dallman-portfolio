import React, { useState, useEffect } from 'react'
import { useForm, ValidationError } from "@formspree/react";
import classes from './ContactSection.module.css'

const ContactSection = () => {
      const [state, handleSubmit] = useForm("contactForm");

    //   useEffect(() => {
    //     if (state.succeeded) {
    //       setModalIsShown(true);
    //     }
    //   }, [state.succeeded]);
    return (
      <section id="contact" className={classes["contact-section"]}>
        <div className={classes["title-container"]}>
          <h1>Contact</h1>
          <h2>brock.dallman@gmail.com</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className={classes.form}
          id="contact-form"
        >
          <div className={classes.form__row}>
            <div className={classes.form__group__top}>
              <label htmlFor="firstName">Your Name</label>
              <input
                className={classes["form__input--first-name"]}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className={classes.form__group__top}>
              <label htmlFor="email">Your Email</label>
              <input
                className={classes["form__input--email"]}
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
          </div>

          <div className={classes.form__group}>
            <label htmlFor="subject">Subject</label>
            <input
              className={classes["form__input--subject"]}
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className={classes.form__group}>
            <label htmlFor="message">Message</label>
            <textarea
              className={classes.form__message}
              name="message"
              id="message"
              required
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </section>
    );
}

export default ContactSection
