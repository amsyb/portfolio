import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import "./Navigation.scss";

function Navigation() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo">
            <div className={location.pathname === "/" ? "navbar__active" : ""}>
              <img src={Logo} alt="anna-sybingco-logo" />
            </div>
          </Link>
        </div>
        <div className="navbar__right">
          <Link
            to="/about"
            className={`navbar__link ${
              location.pathname === "/about" ? "navbar__active" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/resume"
            className={`navbar__link ${
              location.pathname === "/resume" ? "navbar__active" : ""
            }`}
          >
            Resume
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
