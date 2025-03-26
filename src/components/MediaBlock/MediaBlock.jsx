import React from "react";
import "./MediaBlock.scss";

const MediaBlockLeft = ({ image, title, description }) => {
  return (
    <>
      <section className="media">
        <div className="media__container">
          <img src={image} alt={title} className="media__img" />
        </div>
        <div className="media__text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
};

export default MediaBlockLeft;
