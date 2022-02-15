import React from "react";
import HeroContents from "./heroContents/HeroContents";
import Navigation from "./heroContents/Navigation";
import "./hero.css";

function Hero() {
  return (
    <div className="app__hero">
      <Navigation className="app__hero__nav" />
      <HeroContents className="app__hero__contents" />
      {/* <h1>hero</h1> */}
    </div>
  );
}

export default Hero;
