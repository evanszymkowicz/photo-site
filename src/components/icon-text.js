import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from '../assets/icons.json';

export const IconText = ({ name, title, content }) => (
  <div className="icon-text">
    <IcomoonReact iconSet={iconSet} color="#ffffff" size={35} icon={name} />
    <div className="icon-text__right">
      <span className="icon-text-title">{title}</span>
      <span className="icon-text-content">{content}</span>
    </div>
  </div>
);
