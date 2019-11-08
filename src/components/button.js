import React from "react";

export const ButtonWithOutBorder = ({ children, dark, white }) => (
  <button className={`button button-no-border ${dark ? null : "button-white"}`}>
    {children}{" "}
    <IcomoonReact
      iconSet={iconSet}
      color="#ffffff"
      size={20}
      icon="arrow-right"
    />
  </button>
);

export const ButtonWithOutBackground = ({ children, dark, white }) => (
  <button
    className={`button button-no-bg ${dark ? null : "button-white"} ${
      white ? "white" : null
    }`}
  >
    {children}{" "}
    <IcomoonReact
      iconSet={iconSet}
      color={dark ? "#8a8585" : "#ffffff"}
      size={20}
      icon="arrow-right"
    />
  </button>
);
