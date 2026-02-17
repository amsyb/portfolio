import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import Dropdown from "../Dropdown/Dropdown";
import "./Navigation.scss";

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <button
          className="navbar__hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`navbar__right ${isMenuOpen ? "navbar__right--open" : ""}`}
        >
          <Dropdown />
          <Link
            to="/about"
            className={`navbar__link ${
              location.pathname === "/about" ? "navbar__active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/resume"
            className={`navbar__link ${
              location.pathname === "/resume" ? "navbar__active" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
