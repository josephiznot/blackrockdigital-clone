import React from "react";

import "./Hamburger.css";

export default function Hamburger() {
  return (
    <button className="hamburger-container">
      <h6 className="menu">MENU</h6>
      <div className="triple-big-boy">
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
      </div>
    </button>
  );
}
