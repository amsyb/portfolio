const TextBlock = ({ title, copy }) => {
  return (
    <>
      <section>
        <h4>{title}</h4>
        <p>{copy}</p>
      </section>
    </>
  );
};

export default TextBlock;
