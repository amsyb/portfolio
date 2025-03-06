import VisualDesign from "../../assets/icons/visual-design.svg";
import Systems from "../../assets/icons/design-systems.svg";
import Collaboration from "../../assets/icons/collaboration.svg";
import "./Skill.scss";

function Skill() {
  return (
    <>
      <section className="card__all">
        <div className="card">
          <img src={VisualDesign} alt="" className="card__img" />
          <h3 className="card__title"> Visual Identity and Brand Alignment</h3>
          <p className="card__text">
            I have created both new visual identities and led brand refresh
            initiatives, ensuring that the brand’s visuals remained aligned
            while developing advertisements and social media content—all while
            upholding the client’s core brand values.
          </p>
        </div>
        <div className="card">
          <img src={Systems} alt="" className="card__img" />
          <h3 className="card__title"> Design Documentation and Systems</h3>
          <p className="card__text">
            In my previous role, I led the development of wireframes and
            high-fidelity prototypes that evolved into robust systems. This
            experience taught me the importance of an iterative process driven
            by data insights.
          </p>
        </div>
        <div className="card">
          <img src={Collaboration} alt="" className="card__img" />
          <h3 className="card__title">Cross-Functional Collaboration</h3>
          <p className="card__text">
            I have collaborated closely with clients and developers to analyze
            project scope, ensuring feasibility and alignment with deadlines.
            Additionally, I have worked with product managers, and fellow
            designers to deliver fully functional websites across diverse
            industries.
          </p>
        </div>
      </section>
    </>
  );
}

export default Skill;
