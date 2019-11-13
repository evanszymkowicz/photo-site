import React from 'react';
import { IconText } from './icon-text';
import Contact from './contact';
import '../styles/_landing-contact.scss';

export const LandingContact = () => (
  <div className="landing__contact" style={{ background: `url('${'https://profunda-analytics.com/wp-content/uploads/2017/07/Contact-Form-background-768x512.jpg'}'), linear-gradient(0deg, rgba(0,0,0,0.8),rgba(0,0,0,0.8))` }}>
    <span className="landing__contact__subtitle">Contact Me</span>
    <h2 className="landing__contact__title">Work Together</h2>
    <div className="landing__contact__content">
      <div className="landing__contact__content--left">
        <IconText name="location" content="Washington, D.C." />
        <IconText name="phone" content="202 555-5555" />
        <IconText name="envelop" content="john.doe@gmail.com" />
      </div>
      <div className="landing__contact__content--right">
        <Contact />
      </div>
    </div>
  </div>
);
