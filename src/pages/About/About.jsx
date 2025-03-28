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
                A software developer based in Toronto with a background in UX/UI
                design. I’ve led user research, built brand identities from the
                ground up, and communicated data-driven designs to non-technical
                stakeholders.
              </p>
              <p className="about__paragraph">
                Compelled by a genuine curiosity and desire for growth, I
                transitioned into software development. This shift allows me to
                blend my design expertise with coding, crafting user-centered
                and accessible interfaces.
              </p>
            </div>
          </div>
          <div className="test">
            <h4>Tools & Technologies</h4>
            <img src={tech} alt="" className="about__tech" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
