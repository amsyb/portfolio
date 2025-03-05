import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import "./Navigation.scss";

import Button from "../Button/Button.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";

function Navigation() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={Logo} alt="anna-sybingco-logo" />
        </Link>
        <div className="navbar__link">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
