import React from 'react';
import '../styles/scss/landing-about.scss';

export const LandingAboutMe = () => (
  <div
    className="aboutme"
    style={
      {
        // background: `url(${"https://lh3.googleusercontent.com/8DI4KOfR0H4WiT7pyfmef838MNj1FWGHIdr5ArBFlicXIv_suqFcPjyCqL75H_1UQs6GJsjAW_a71akE7pCSmM4U=w1200-h800-l90"})`
      }
    }
  >
    <span className="aboutme__subtitle">Something</span>
    <h2 className="aboutme__title">About me</h2>
    <p className="aboutme__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem
      tempore nisi ullam, tenetur asperiores pr
      <br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ab
      facilis quibusdam qui laudantium eum mollitia rep
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam
      voluptate obcaecati earum reiciendis qui
    </p>
  </div>
);
