import Headshot from "../../assets/images/bw-headshot.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Homepage.scss";

function Homepage() {
  return (
    <div className="homepage">
      <div className="banner">
        <div className="banner__text">
          <h1 className="banner__title">Anna Sybingco</h1>
          <p className="banner__description">
            I’m an experienced UX/UI designer with a diploma in software
            engineering. Simply put, I’m a highly enthusiastic problem solver,
            dedicated to inclusive design.  If you want to learn more about me
            visit my about page.
          </p>
          <button>Download Resume</button>
        </div>
        <img src={Headshot} alt="profile-image" className="banner__img" />
      </div>
      <ProjectCard />
    </div>
  );
}

export default Homepage;
