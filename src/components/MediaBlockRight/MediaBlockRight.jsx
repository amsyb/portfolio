import React from "react";
import "../MediaBlock/MediaBlock.scss";

const MediaBlockRight = ({
  image,
  video,
  title,
  description,
  button,
  buttonLink,
}) => {
  const goToLink = () => {
    window.open(buttonLink, "_blank");
  };

  return (
    <>
      <section className="media">
        <div className="media__text">
          <h4>{title}</h4>
          <p>{description}</p>
          {button && (
            <button className="btn" onClick={goToLink}>
              {button}
            </button>
          )}
        </div>
        <div className="media__container">
          {video ? (
            <video controls className="media__img">
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={image}
              alt={title}
              className="media__img"
              loading="lazy"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default MediaBlockRight;
