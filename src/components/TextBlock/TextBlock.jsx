import "./TextBlock.scss";

const TextBlock = ({ title, copy1, copy2, copy3, copy4 }) => {
  return (
    <>
      <section className="text">
        <h4 className="text__title">{title}</h4>
        <p className="text__copy">{copy1}</p>
        <p className="text__copy">{copy2}</p>
        <p className="text__copy">{copy3}</p>
        <p className="text__copy">{copy4}</p>
      </section>
    </>
  );
};

export default TextBlock;
