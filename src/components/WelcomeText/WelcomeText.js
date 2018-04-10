import React, { Component } from "react";
import "./WelcomeText.css";

class WelcomeText extends Component {
  constructor() {
    super();
    this.state = {
      dropDownFlag: false
    };
  }

  render() {
    var { dropDownFlag } = this.state;
    return (
      <div>
        <div className="welcome-container">
          <h3>Welcome To Our Studio!</h3>
          <h1>IT'S NICE TO MEET YOU</h1>
          <button className="tell-me-more">TELL ME MORE</button>
        </div>
      </div>
    );
  }
}
export default WelcomeText;
