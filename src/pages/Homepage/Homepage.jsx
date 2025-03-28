import Headshot from "../../assets/images/bw-headshot.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import about from "../../assets/images/about.png";

import "./Homepage.scss";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <img src={about} alt="" className="banner__image" />
        <div className="banner">
          <div className="banner__text">
            <p className="banner__description">
              I’m an experienced UX/UI designer with a diploma in software
              engineering. Simply put, I’m a highly enthusiastic problem solver,
              dedicated to inclusive design. 
            </p>
          </div>
        </div>
        <ProjectCard />
      </div>
    </>
  );
}

export default Homepage;
