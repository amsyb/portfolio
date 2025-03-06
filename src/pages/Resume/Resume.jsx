import resumeImg from "../../assets/images/resume.png";
import "./Resume.scss";

function Resume() {
  return (
    <div className="resume">
      <img src={resumeImg} alt="resume" className="resume__img" />
      <button>Download PDF</button>
    </div>
  );
}

export default Resume;
