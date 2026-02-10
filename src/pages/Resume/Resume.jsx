import "./Resume.scss";
import resume from "../../assets/images/desktop-resume.png";
import mobileResume from "../../assets/images/mobile-resume.png";
import resumePDF from "../../assets/images/desktop-resume.pdf";

function Resume() {
  return (
    <div className="resume">
      <a href={resumePDF} download="Resume">
        <button className="btn">Download PDF</button>
      </a>
      <img src={resume} alt="resume" className="resume__img" />
      <img
        src={mobileResume}
        alt="mobile-resume"
        className="resume__img-mobile"
      />
    </div>
  );
}

export default Resume;
