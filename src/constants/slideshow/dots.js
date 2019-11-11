import React, { memo } from "react";
import Dot from "./dot";

const s = {
    container: "fullW height70 abs bot0 fCenter black50"
};

const Dots = ({ slideId, slides }) => {
  return (
    <div className={s.container}>
      <div className="row">
        {slides.map((slide, id) => (
          <Dot slideId={slideId} dotId={id} key={id} />
        ))}
      </div>
    </div>
  );
};

export default memo(Dots);
