import React from "react";
import logo from "../../Assets/logo.jpg";
import "./header.css";
const Header = () => {
  return (
    <nav>
      <div className="nav-items-icon">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items-list">
        <div className="location-container">
          <span id="location">Location</span>

          <i className="fa-solid fa-caret-down"></i>
        </div>
        <ul>
          <li>
            <button className="btn">
              <i className="nav-icons fa-solid fa-tag"></i>
              <span className="nav-list-text">Offers</span>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="nav-icons fa-solid fa-life-ring"></i>
              <span className="nav-list-text">Help</span>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="nav-icons fa-solid fa-user-plus"></i>
              <span className="nav-list-text"> Sign In</span>
            </button>
          </li>
          <li>
            <button className="btn">
              <i className="nav-icons fa-solid fa-cart-shopping"></i>
              <span className="nav-list-text">Cart</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
