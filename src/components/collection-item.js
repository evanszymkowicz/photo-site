import React from 'react';
import { ButtonWithoutBorder } from './button';
import '../scss/collection-item.scss';

export const CollectionItem = ({ item: { photo, title, description } }) => (
  <div className="collection__gallery__item">
    <div className="collection__gallery__img" style={{ backgroundImage: `url(${photo}` }} />
    <div className="collection__gallery__description">
      <h3 className="collection__gallery__title">{title}</h3>
      {

        }
      <ButtonWithoutBorder>View</ButtonWithoutBorder>
    </div>
  </div>
);
