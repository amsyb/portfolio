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
                With a background in user experience and a growing foundation in
                front-end development, I’m passionate about crafting thoughtful,
                user-centered digital experiences. I’ve collaborated with
                cross-functional teams—including developers, product managers,
                and marketers—to bring ideas to life across a variety of
                projects, from websites and landing pages to design systems and
                interactive prototypes.
              </p>
              {/* <ul>
                <li>
                  Auditing and improving digital experiences through research,
                  data analysis, and iterative testing to enhance usability and
                  engagement.
                </li>
                <li>
                  Contributing to scalable design systems and front-end
                  components, ensuring consistency and ease of implementation
                  across platforms.
                </li>
                <li>
                  Bridging design and development by creating documentation,
                  prototypes, and implementation-ready assets that streamline
                  collaboration and execution.
                </li>
                <li>
                  Supporting accessibility and performance goals, ensuring the
                  experiences I help build are inclusive, efficient, and aligned
                  with user needs.
                </li>
              </ul> */}

              <p className="about__paragraph">
                I'm proficient in tools like Figma, and I recently completed a
                Software Engineering Bootcamp where I honed my skills in HTML,
                CSS, and JavaScript. Whether I’m wireframing a new feature,
                optimizing a user flow, or building out front-end components, I
                focus on clarity, usability, and collaboration every step of the
                way.
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
