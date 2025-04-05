import "./Summary.scss";

const Summary = ({
  overview1,
  overview2,
  overview3,
  duration,
  tools,
  role,
  button,
  buttonLink,
}) => {
  const goToLink = () => {
    window.open(buttonLink, "_blank");
  };

  return (
    <>
      <section className="summary">
        <div className="summary__copy">
          <div className="summary__overview">
            <h3>Overview</h3>
            <p>{overview1}</p>
            <p>{overview2}</p>
            <p>{overview3}</p>
          </div>
          <div className="summary__stats">
            <div className="summary__duration">
              <h3>Project Duration</h3>
              <p>{duration}</p>
            </div>
            <div className="summary__tools">
              <h3>Tools Used</h3>
              <p>{tools}</p>
            </div>
            <div className="summary__role">
              <h3>Role</h3>
              <p>{role}</p>
            </div>
          </div>
        </div>
        <button onClick={goToLink}>{button}</button>
      </section>
    </>
  );
};

export default Summary;
