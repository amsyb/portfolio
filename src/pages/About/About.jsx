import "./About.scss";
import tech from "../../assets/images/tech.png";

function About() {
  return (
    <>
      <section>
        <div className="about">
          <div className="about__text">
            <h1>Hi I'm Anna</h1>
            <div className="about__description">
              <p className="about__paragraph">
                With three years of experience in UX/UI, I’ve led user research,
                built brand identities from the ground up, and communicated
                data-driven designs to non-technical stakeholders.
              </p>
              <p className="about__paragraph">
                Compelled by a genuine curiosity and desire for growth, I
                obtained a diploma in software development. Now, I bridge design
                and engineering to create intuitive, accessible, and scalable
                solutions.
              </p>
            </div>
          </div>
          <div className="test">
            <h4>Tools & Technologies</h4>
            <img src={tech} alt="" className="about__tech" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
