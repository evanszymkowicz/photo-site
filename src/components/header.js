import iconSet from "../../assets/selection.json";
import IcomoonReact from "icomoon-react";
import React from "react";

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
              icon="vk"
            />
          </li>
        </ul>
      </div>
    </div>
    <div className="header__text">
      <h1 className="header__text--title">John Doe</h1>
      <h2 className="header__text--subtitle">Photographer</h2>
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
