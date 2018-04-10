import React, { Component } from "react";

import "./Hamburger.css";

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleDropDown() {
    var drop_down_menu = document.getElementsByClassName("drop-down-menu")[0];
    if (drop_down_menu.style.height === "0px") {
      drop_down_menu.style.height = "260px";
    } else {
      drop_down_menu.height = "0px";
    }
  }
  render() {
    var GetIt = document.getElementsByClassName("drop-down-menu");
    console.log(GetIt);
    return (
      <button
        className="hamburger-container"
        onClick={() => this.handleDropDown()}
      >
        <h6 className="menu">MENU</h6>
        <div className="triple-big-boy">
          <div className="layer" />
          <div className="layer" />
          <div className="layer" />
        </div>
      </button>
    );
  }
}
export default Hamburger;
