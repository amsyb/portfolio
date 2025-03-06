import "./CaseStudy1.scss";

const CaseStudy1 = ({ title, children }) => {
  return (
    <div>
      <section className="project__text">
        <h4>{title}</h4>
        <p>{children}</p>
      </section>
      <section>title</section>
    </div>
  );
};

export default CaseStudy1;
