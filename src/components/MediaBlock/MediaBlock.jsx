import React from "react";
import "./MediaBlock.scss";
import "../../pages/TacoRestaurant/TacoRestaurant.scss";

const MediaBlockLeft = ({ image, title, description }) => {
  return (
    <>
      <section className="media final__product">
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
