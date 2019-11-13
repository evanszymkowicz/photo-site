import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from '../assets/icons.json';
import '../styles/scss/button.scss';

export const ButtonWithoutBorder = ({ children, dark, white }) => (
  <button className={`button button-no-border ${dark ? null : 'button-white'}`}>
    {children}
    {' '}
    <IcomoonReact
      iconSet={iconSet}
      color="#ffffff"
      size={20}
      icon="arrow-right"
    />
  </button>
);

export const ButtonWithoutBackground = ({ children, dark, white }) => (
  <button
    className={`button button-no-bg ${dark ? null : 'button-white'} ${
      white ? 'white' : null
    }`}
  >
    {children}
    {' '}
    <IcomoonReact
      iconSet={iconSet}
      color={dark ? '#8a8585' : '#ffffff'}
      size={20}
      icon="arrow-right"
    />
  </button>
);
