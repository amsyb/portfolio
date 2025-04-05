import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Homepage.scss";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <section className="homepage__copy">
          <div className="homepage__about">
            <p>
              I’ve led projects from ideation to deployment, always focusing on
              creating intuitive experiences that meet user needs.
            </p>
            <p>
              Now, with a software engineering diploma in hand, I'm eager to
              tackle novel challenges and build intuitive, accessible, and
              scalable solutions.
            </p>
          </div>
          <div className="homepage__profile">
            <section classname="container">
              <div className="homepage__availability">
                <div class="circle"></div>
                <p>open to work</p>
              </div>
            </section>
            <h1 className="homepage__title">Anna Sybingco</h1>
          </div>
        </section>

        <ProjectCard />
      </div>
    </>
  );
}

export default Homepage;
