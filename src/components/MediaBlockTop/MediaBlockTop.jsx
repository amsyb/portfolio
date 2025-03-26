import "./MediaBlockTop.scss";

const MediaBlockTop = ({ title, text, image }) => {
  return (
    <>
      <section>
        <div className="block__container">
          <img src={image} alt={title} className="block__img" />
        </div>
        <div className="block__copy">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </section>
    </>
  );
};

export default MediaBlockTop;
