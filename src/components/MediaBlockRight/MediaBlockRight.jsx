import React from "react";
import "../MediaBlock/MediaBlock.scss";

const MediaBlockRight = ({ image, title, description, button }) => {
  return (
    <>
      <section className="media">
        <div className="media__text">
          <h4>{title}</h4>
          <p>{description}</p>
          <button>{button}</button>
        </div>
        <div className="media__container">
          <img src={image} alt={title} className="media__img" />
        </div>
      </section>
    </>
  );
};

export default MediaBlockRight;
