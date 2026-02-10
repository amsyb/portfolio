import { Link } from "react-router-dom";
import Lilt from "../../assets/images/lilt.png";
import tacoBoutIt from "../../assets/images/tcs.png";
import giftstart from "../../assets/images/gsp.png";
import nickgraham from "../../assets/images/ng-final.png";
import doorwai from "../../assets/images/dw.png";
import "./ProjectCard.scss";
import "../../styles/_global.scss";

function ProjectCard() {
  return (
    <>
      <section className="project">
        <section className="project__dev">
          <h2 className="project__title">Full Stack</h2>
          <section className="project__card">
            <div className="project__description">
              <h2>Doorwai</h2>
              <div className="project__category">
                <p>Full Stack • Typescript • AI Integration</p>
              </div>
              <p>
                🏆 Google Technology 1st Place Winner. Developed an AI-powered
                full-stack application to streamline access to homeless shelter
                resources for at-risk youth. Leveraged AI to make automated
                phone calls to shelters, check bed availability, and pre-fill
                intake forms for users.
              </p>
              <Link to="/doorwai">
                <button className="project__btn">View Case Study</button>
              </Link>
            </div>
            <img
              src={doorwai}
              alt="doorwai-mockup"
              className="project__img"
              loading="lazy"
            />
          </section>
        </section>
        <section className="project__card">
          <div className="project__description">
            <h2>Lilt</h2>
            <div className="project__category">
              <p>Full Stack • JavaScript • React • Vercel</p>
            </div>
            <p>
              Four years of bartending experience informed the need for a user
              friendly resource for bartenders by bartenders. Designed and
              developed a responsive full-stack web application using
              JavaScript, SCSS and Vercel.
            </p>
            <Link to="/lilt">
              <button className="project__btn">View Case Study</button>
            </Link>
          </div>
          <img
            src={Lilt}
            alt="project-preview"
            className="project__img"
            loading="lazy"
          />
        </section>
        <section className="project__card">
          <div className="project__description">
            <h2>Taco 'Bout It</h2>
            <div className="project__category">
              <p>Full Stack Development • JavaScript • React</p>
            </div>
            <p>
              Designed and developed a full-stack web application using Express,
              JavaScript, Node.js, and CSS, enabling customers to place orders,
              and earn rewards.
            </p>
            <Link to="/taco-restaurant">
              <button className="project__btn">View Case Study</button>
            </Link>
          </div>
          <img
            src={tacoBoutIt}
            alt="taco-bout-it-mockup"
            className="project__img"
            loading="lazy"
          />
        </section>
        <h2 className="project__title">UX/UI</h2>
        <section className="project__card">
          <div className="project__description">
            <h2>Giftstart</h2>
            <div className="project__category">
              <p>Brand Creation • User Research • Tailwind Coding</p>
            </div>
            <p>
              Building a brand from just a logo, I developed a responsive design
              system for a baby registry. The site was subsequently recognized
              with a Netty award for its innovation.
            </p>
            <Link to="/giftstart">
              <button className="project__btn">View Case Study</button>
            </Link>
          </div>
          <img
            src={giftstart}
            alt="giftstart-mockup"
            className="project__img"
            loading="lazy"
          />
        </section>
        <section className="project__card">
          <div className="project__description">
            <h2>Nick Graham</h2>
            <div className="project__category">
              <p>UI Design • Responsive • Accessible</p>
            </div>
            <p>
              With only a conceptual vision for their website, I designed a
              homepage that followed best practices, effectively showcasing
              their full product catalog.
            </p>
            <Link to="/nickgraham">
              <button className="project__btn">View Case Study</button>
            </Link>
          </div>
          <img
            src={nickgraham}
            alt="giftstart-mockup"
            className="project__img"
            loading="lazy"
          />
        </section>
      </section>
    </>
  );
}

export default ProjectCard;
