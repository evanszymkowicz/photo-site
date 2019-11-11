import React from "react";

export const CustomInput = ({ type, name, ...otherProps }) => {
  if (type === "textarea") {
    return <textarea className="custom__input textarea"></textarea>;
  } else {
    return (
      <input
        className="custom__input"
        type={type}
        name={name}
        {...otherProps}
      />
    );
  }
};
