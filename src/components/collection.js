import React, { Component } from "react";
import { CollectionCategories } from "../collection-categories/collection-categories";
import { CollectionGallery } from "../collection-gallery/collection-galery";
import { ButtonWithOutBackground } from "../button/button";

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      category: {
        id: "",
        name: "name"
      },


  handleCategorieClick = category => {
    console.log(category);
  };

  render() {
    const categories = ["All", "Portrait", "Fashion", "Life", "Experience"];
    return (
      <div className="collection__container">
        <span className="collection__subtitle">Protography</span>
        <h2 className="collection__title">Portfolio</h2>
        <CollectionCategories
          categories={categories}
          handleCategorieClick={this.handleCategorieClick}
        />
        <CollectionGallery photos={this.state.photos} />
        <ButtonWithOutBackground dark>See More:</ButtonWithOutBackground>
      </div>
    );
  }
}

export default Collection;
