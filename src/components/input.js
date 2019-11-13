import React from 'react';
import '../styles/scss/input.scss';

export const CustomInput = ({ type, name, ...otherProps }) => {
  if (type === 'textarea') {
    return <textarea className="input textarea" />;
  }
  return (
    <input
      className="input"
      type={type}
      name={name}
      {...otherProps}
    />
  );
};
