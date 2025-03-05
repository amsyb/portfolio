import Navigation from "../../components/Navigation/Navigation";
import Headshot from "../../assets/images/bw-headshot.png";

import "./Homepage.scss";

function Homepage() {
  return (
    <div>
      <Navigation />
      <div className="banner">
        <div className="banner__text">
          <h1 className="banner__title">Anna Sybingco</h1>
          <p className="banner__description">
            I’m an experienced UX/UI designer with a diploma in software
            engineering. Simply put, I’m a highly enthusiastic problem solver,
            dedicated to inclusive design.  If you want to learn more about me
            visit my about page.
          </p>
        </div>
        <img src={Headshot} alt="profile-image" className="banner__img" />
      </div>
    </div>
  );
}

export default Homepage;
