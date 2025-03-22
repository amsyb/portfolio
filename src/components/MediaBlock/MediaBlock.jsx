import React from "react";
import "./MediaBlock.scss";

const MediaBlock = ({ image, children }) => {
  return (
    <>
      <section className="block">
        <div className="block__img">
          <img src={image} alt="" />
        </div>
        <div className="block__text">{children}</div>
      </section>
    </>
  );
};

export default MediaBlock;
