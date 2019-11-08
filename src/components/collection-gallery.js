import React from "react";
import iconSet from "../../assets/selection.json";
import IcomoonReact from "icomoon-react";

export const IconText = ({ name, title, content }) => (
  <div className="icon__text">
    <IcomoonReact iconSet={iconSet} color="#ffffff" size={35} icon={name} />
    <div className="icon__text--right">
      <span className="icon__text__title">{title}</span>
      <span className="icon__text__content">{content}</span>
    </div>
  </div>
);
