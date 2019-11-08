import React from "react";

export const Categories = ({ categories, handleCategorieClick }) => (
  <div>
    <ul className="collection__categories">
      {categories.map(category => (
        <li key={category} className="categories__option" onClick={() => handleCategorieClick(category)} >
          {category}
        </li>
      ))}
    </ul>
  </div>
);
