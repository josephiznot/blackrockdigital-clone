import React from "react";
import "./WelcomeText.css";

export default function WelcomeText() {
  return (
    <div>
      <div className="drop-down-menu" />
      <div className="welcome-container">
        <h3>Welcome To Our Studio!</h3>
        <h1>IT'S NICE TO MEET YOU</h1>
        <button className="tell-me-more">TELL ME MORE</button>
      </div>
    </div>
  );
}
