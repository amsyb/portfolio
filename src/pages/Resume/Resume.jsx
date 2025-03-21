import "./Resume.scss";
import resume from "../../assets/images/desktop-resume.png";
import mobileResume from "../../assets/images/mobile-resume.png";

function Resume() {
  return (
    <div className="resume">
      <img src={resume} alt="resume" className="resume__img" />
      <img
        src={mobileResume}
        alt="mobile-resume"
        className="resume__img-mobile"
      />
      <button>Download PDF</button>
    </div>
  );
}

export default Resume;
