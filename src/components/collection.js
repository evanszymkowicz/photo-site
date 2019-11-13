import React, { Component } from "react";
import { CollectionCategories } from "./collection-categories";
import { CollectionGallery } from "./collection-gallery";
import { ButtonWithoutBackground } from "./button";
import "../styles/scss/collection.scss"

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      category: {
        id: "",
        name: "name"
      },
      photos: [
        {
          title: "Building",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://i.imgur.com/3akVAln.jpg"
        },
        {
          title: "People",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://lh3.googleusercontent.com/MIcuvQlm2ZvW-hHxkMK5m8SaP1ZohIXWgr66K2QqPvwDbdj-BkWlWG5TkKu0BRvDi0MWBrQiXro2q4As-1__EvQAVg=w952-h800-l90"
        },
        {
          title: "Wedding",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://lh3.googleusercontent.com/D1GGopXcKQ_f6zSJ0hSavXe1Pd3c6M8_cRvVvHH9yasUd8vWDuKIzKvUf1qHTKr9uZn15xn-qRca17uTSjysftAL4g=w952-h800-l90"
        },
        {
          title: "Beach Wedding",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://lh3.googleusercontent.com/E_f6b7FN82Sc4W1km-3S15vxpxsZXSyKWxC7FqZfhG-omhPtDqhJLt-wk6eS64G9-15LMjIy-OC8BDF8o3iIK8Oh=w952-h800-l90"
        },
        {
          title: "kildare",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://lh3.googleusercontent.com/U8jcpuxDlL7KzEGzbCh8S4EIRGgDUPQpjhsgYXcH_o-zaCwj2p2KQb2r8SduL0YU-2APdgBsAft372mr02hdPDcE=w952-h800-l90"
        },
        {
          title: "Bride to Be",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://lh3.googleusercontent.com/4yB_MpEBX8dqj7HRrE1ruzGjFRBRy-MDQCILJ9gUojMshWRn28DgW5IPZKc6_uUkKbEYMPQ47XKhxy9qaxIEGRAA=w1200-h800-l90"
        },
        {
          title: "Beach",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://lh3.googleusercontent.com/U8jcpuxDlL7KzEGzbCh8S4EIRGgDUPQpjhsgYXcH_o-zaCwj2p2KQb2r8SduL0YU-2APdgBsAft372mr02hdPDcE=w952-h800-l90"
        },
        {
          title: "Sahara",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://i.imgur.com/rM0HVOY.jpg"
        },
        {
          title: "Different Beach",
          description: "lorem ispduj euebnjbn  bsdjffsjfnjsd ",
          photo:
            "https://lh3.googleusercontent.com/U8jcpuxDlL7KzEGzbCh8S4EIRGgDUPQpjhsgYXcH_o-zaCwj2p2KQb2r8SduL0YU-2APdgBsAft372mr02hdPDcE=w952-h800-l90"
        }
      ]
    };
  }

  handleCategoryClick = category => {
    console.log(category);
  };

  render() {
    const categories = ["All", "Portrait", "Fashion", "Life", "Experience"];
    return (
      <div className="collection__container">
        <span className="collection__subtitle">Photography</span>
        <h2 className="collection__title">Portfolio</h2>
        <CollectionCategories
          categories={categories}
          handleCategoryClick={this.handleCategoryClick}
        />
        <CollectionGallery photos={this.state.photos} />
        <ButtonWithoutBackground dark>Load more work</ButtonWithoutBackground>
      </div>
    );
  }
}

export default Collection;
