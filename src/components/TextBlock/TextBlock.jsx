import "./TextBlock.scss";

const TextBlock = ({ title, copy }) => {
  return (
    <>
      <section className="text">
        <h4 className="text__title">{title}</h4>
        <p className="text__copy">{copy}</p>
      </section>
    </>
  );
};

export default TextBlock;
