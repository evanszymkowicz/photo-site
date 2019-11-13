import IcomoonReact from 'icomoon-react';
import React from 'react';
import iconSet from '../assets/icons.json';
import '../styles/scss/header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__top">
      <nav className="header__nav">
        <ul>
          <li className="header__option">Home</li>
          <li className="header__option">Albums</li>
          <li className="header__option">Contact</li>
        </ul>
      </nav>
      <div className="header__nav">
        <ul>
          <li className="header__option">
            <IcomoonReact
              iconSet={iconSet}
              color="#ffffff"
              size={25}
              icon="instagram"
            />
          </li>
          <li className="header__option">
            <IcomoonReact
              iconSet={iconSet}
              color="#ffffff"
              size={25}
              icon="facebook"
            />
          </li>
          <li className="header__option">
            <IcomoonReact
              iconSet={iconSet}
              color="#ffffff"
              size={25}
              icon="youtube"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="header__text">
      <h1 className="header__text__title">John Doe</h1>
      <h2 className="header__text__subtitle">Photographer</h2>
    </div>
    <IcomoonReact
      iconSet={iconSet}
      color="#ffffff"
      size={50}
      icon="down"
      className="header__arrow"
    />
  </header>
);
