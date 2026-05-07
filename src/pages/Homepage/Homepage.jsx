import ProjectCard from "../../components/ProjectCard/ProjectCard";

import "./Homepage.scss";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <section className="homepage__copy">
          <div className="homepage__about">
            <p>
             
As an experienced UX/UI Developer, I understand that data-driven research and an iterative design process are critical to crafting inclusive, intuitive user experiences.

            </p>
            <p>
              I’m excited to connect with others who share a passion for innovation and to continue growing in a field that blends creativity and logic.
            </p>
          </div>
          <div className="homepage__profile">
            <section class="container">
              <a href="">
                <div className="homepage__availability">
                  <div class="circle"></div>
                  <p>open to work</p>
                </div>
              </a>
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
