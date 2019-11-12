import React, { Component } from 'react';
import { CustomInput } from './input';
import { ButtonWithoutBackground } from './button';
import '../scss/contact.scss';

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
        <ButtonWithoutBackground white>Submit</ButtonWithoutBackground>
      </div>
    );
  }
}

export default Contact;
