import React, { Component } from "react";

import "./Hamburger.css";

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      dropDownFlag: false
    };
  }
  handleDropDown() {
    var { dropDownFlag } = this.state;

    this.setState({
      dropDownFlag: !dropDownFlag
    });
  }
  render() {
    var { dropDownFlag } = this.state;
    return (
      <div>
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
        {dropDownFlag ? (
          <div className="drop-down-menu" name="drop-down">
            <ul>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Hamburger;
