import "./About.scss";
import Skill from "../../components/Skill/Skill";

function About() {
  return (
    <>
      <div className="about">
        <div className="about__text">
          <h2>Hello there,</h2>
          <div className="about__description">
            <p className="about__paragraph">
              Great of you to stop by, my name is Anna, I'm a UX Designer driven
              to create seamless, intuitive, and engaging digital interactions.
              Experienced in e-commerce, I strive to enhance the online shopping
              journey by making it efficient as well as memorable.
            </p>
            <p className="about__paragraph">
              Over the past 3 years, I have had the privilege of working with a
              diverse range of e-commerce businesses, from startups to
              established brands. My projects have spanned various industries,
              including fashion, electronics, food, and more. Each project has
              presented unique challenges and opportunities, allowing me to
              refine my skills in:
            </p>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
}

export default About;
