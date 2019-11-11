import React from "react";
import { IconText } from "./icon-text/icon-text";
import Contact from "./contact/contact";

export const LandingContact = () => (
  <div className="landing__contact" style={{
      background: `url('${"https://lh3.googleusercontent.com/IgD_Kmf3498eiHxTcPrKTTwMYtbRP4uu-SuUHSA-t7kJg_5SYSkt_ScJJpxPOAcWLC9pQBuqytjSeYjqvQ7oW8Cn=w1200-h800-l90"}'), linear-gradient(0deg, rgba(0,0,0,0.8),rgba(0,0,0,0.8))`
    }}
  >
    <span className="landing__contact__subtitle">Let's</span>
      <h2 className="landing__contact__title">Work</h2>
        <div className="landing__contact__content">
          <div className="landing__contact__content--left">
            <IconText
              name="location"
              title="See me"
              content="Valencia, Venezuela"
            />
            <IconText name="phone" title="Call me" content="+58 414 581 13 17" />
            <IconText
              name="envelop"
              title="Write me"
              content="kildarealauser@gmail.com"
            />
          </div>
          <div className="landing__contact__content--right">
        <Contact />
      </div>
    </div>
  </div>
);
