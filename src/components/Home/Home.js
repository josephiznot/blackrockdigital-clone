import React, { Component } from "react";

import "./Home.css";
import WelcomeText from "./../WelcomeText/WelcomeText";
import NavBar from "./../NavBar/NavBar";

function Home() {
  return (
    <header>
      <NavBar />
      <WelcomeText />
    </header>
  );
}
export default Home;
