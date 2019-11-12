import React from 'react';
import '../scss/collection-categories.scss';

export const CollectionCategories = ({ categories, handleCategoryClick }) => (
  <div>
    <ul className="collection__categories">
      {categories.map((category) => (
        <li key={category} className="collection__categories__option" onClick={() => handleCategoryClick(category)}>
          {category}
        </li>
      ))}
    </ul>
  </div>
);
