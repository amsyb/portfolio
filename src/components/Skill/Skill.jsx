import VisualDesign from "../../assets/icons/visual-design.svg";
import Systems from "../../assets/icons/design-systems.svg";
import Collaboration from "../../assets/icons/collaboration.svg";
import "./Skill.scss";

function Skill() {
  return (
    <>
      <section className="card__all">
        <div className="card">
          <img src={VisualDesign} alt="" className="card__img" loading="lazy" />
          <h3 className="card__title"> Visual Identity and Brand Alignment</h3>
          <p className="card__text">
            I have created both new visual identities and led brand refresh
            initiatives, ensuring that the brand’s visuals remained consistent
            while developing advertisements and social media content—all while
            staying true to the client’s core values. These experiences have
            deepened my appreciation for crafting cohesive, user-centered
            designs that resonate with audiences.
          </p>
        </div>
        <div className="card">
          <img src={Systems} alt="" className="card__img" loading="lazy" />
          <h3 className="card__title"> Design Documentation and Systems</h3>
          <p className="card__text">
            In my previous role, I led the development of wireframes and
            high-fidelity prototypes that evolved into robust systems. This
            process not only honed my design skills but also sparked my interest
            in bringing these designs to life through code, reinforcing my
            belief in an iterative, data-driven approach to building impactful
            digital products.
          </p>
        </div>
        <div className="card">
          <img
            src={Collaboration}
            alt=""
            className="card__img"
            loading="lazy"
          />
          <h3 className="card__title">Cross-Functional Collaboration</h3>
          <p className="card__text">
            I have collaborated closely with clients and developers to analyze
            project scope, ensuring feasibility and alignment with deadlines.
            Additionally, I’ve worked alongside product managers and fellow
            designers to deliver fully functional websites across diverse
            industries. This cross-functional collaboration has inspired me to
            further explore the development side, allowing me to bridge the gap
            between design and implementation.
          </p>
        </div>
      </section>
    </>
  );
}

export default Skill;
