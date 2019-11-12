import React from 'react';
import { CollectionItem } from './collection-item';

import '../scss/collection-gallery.scss';

export const CollectionGallery = ({ photos }) => (
  <div className="collection__gallery">
    {photos.map((item) => <CollectionItem key={item.title} item={item} />)}
  </div>
);
