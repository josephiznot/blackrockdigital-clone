import React from "react";

import "./NavBar.css";
import Hamburger from "./../Hamburger/Hamburger";

export default function NavBar() {
  return (
    <div>
      <div className="nav-bar">
        <nav>
          <a>
            <h1>Start Bootstrap</h1>
          </a>
          <div className="nav-link-container">
            <a className="nav-link">SERVICES</a>
            <a className="nav-link">PORTFOLIO</a>
            <a className="nav-link">ABOUT</a>
            <a className="nav-link">TEAM</a>
            <a className="nav-link">CONTACT</a>
          </div>
          <Hamburger />
        </nav>
      </div>
    </div>
  );
}
