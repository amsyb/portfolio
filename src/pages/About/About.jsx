import "./About.scss";
import headshot from "../../assets/images/bw-headshot.png";
import InfiniteTechStackScroll from "../../components/TechStack/TechStack";

function About() {
  return (
    <>
      <section>
        <div className="about">
          <div className="about__text">
            <h1>I'm Anna Sybingco</h1>
            <img src={headshot} alt="headshot" />
            <div className="about__description">
              <p className="about__paragraph">
                With a background in user experience and a growing foundation in
                full-stack development, I’m passionate about crafting
                thoughtful, user-centered digital experiences. I’ve collaborated
                with cross-functional teams, including developers, product
                managers, and marketers, to bring ideas to life across a variety
                of projects, from websites and landing pages to design systems
                and interactive prototypes.
              </p>

              <p className="about__paragraph">
                I'm proficient in tools like Figma, and I recently attained a
                Bachelor of Science Software Engineering where I honed my skills
                with React, AI integration and much more. Whether I’m
                wireframing a new feature, optimizing a user flow, or building
                out front-end components, I focus on clarity, usability, and
                collaboration every step of the way.
              </p>
            </div>
          </div>
          <div className="test">
            <h4>Tools & Technologies</h4>
            <InfiniteTechStackScroll />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
