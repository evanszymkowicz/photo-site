import React, { Component } from "react";
import { CustomInput } from "../custom-input/custom-input";
import { ButtonWithOutBackground } from "../button/button";

class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__top">
          <CustomInput name="name" type="text" placeholder="Name" required />
          <CustomInput name="email" type="email" placeholder="Email" required />
        </div>
        <CustomInput name="message" type="textarea" placeholder="Message" required />
        <ButtonWithOutBackground white>Submit</ButtonWithOutBackground>
      </div>
    );
  }
}

export default Contact;
