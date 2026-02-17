import "./Dropdown.scss";
import "../Navigation/Navigation.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="navbar__dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="navbar__link">Projects ▾</span>
      {isOpen && (
        <div className="navbar__dropdown-menu">
          <Link to="/doorwai" className="navbar__dropdown-item">
            Doorwai
          </Link>
          <Link to="/lilt" className="navbar__dropdown-item">
            Lilt
          </Link>
          <Link to="/steevy" className="navbar__dropdown-item">
            Steevy
          </Link>
          <Link to="/taco-restaurant" className="navbar__dropdown-item">
            Taco 'Bout It
          </Link>
          <Link to="/giftstart" className="navbar__dropdown-item">
            Giftstart
          </Link>
          <Link to="/nickgraham" className="navbar__dropdown-item">
            Nick Graham
          </Link>
        </div>
      )}
    </div>
  );
}
export default Dropdown;
