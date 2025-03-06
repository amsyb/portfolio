import React from "react";
import giftstart from "../../assets/images/gs-portfolio.png";
import "./ProjectCard.scss";

function ProjectCard() {
  return (
    <>
      <section className="project__card">
        <div className="project__description">
          <h2>Giftstart</h2>
          <div className="project__category">
            <p>Brand Creation | User Research | Tailwind Coding</p>
          </div>
          <p>
            Building a brand from just a logo, I developed a responsive design
            system for a baby registry. The site was subsequently recognized
            with a Netty award for its innovation.
          </p>
          <button>View Case Study</button>
        </div>
        <div>
          <img
            src={giftstart}
            alt="giftstart-mockup"
            className="project__img"
          />
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
