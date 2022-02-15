import React, { useState } from "react";
import gsap from "gsap";
console.log(gsap);

function Navigation() {
  const hamBurger = document.getElementsByClassName("hero__nav__hamburger");
  const navList = document.getElementsByClassName("hero__nav__list");

  const [navClicked, setnavClicked] = useState(false);
  console.log(navClicked);
  return (
    <>
      <div className="nav flex">
        <div className="hero__nav__logo">Flying pan</div>
        <button
          className="hero__nav__hamburger"
          onClick={() => {
            setnavClicked((navClicked = true));
          }}
        >
          <span></span>
        </button>
        <ul className="hero__nav__list flex">
          <li className="hero__nav__list__item">
            <a href="#" className="hero__navLink">
              home
            </a>
          </li>
          <li className="hero__nav__list__item">
            <a href="#" className="hero__navLink">
              about
            </a>
          </li>
          <li className="hero__nav__list__item">
            <a href="#" className="hero__navLink">
              contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav--smallScreen flex">
        <div className="hero__nav__logo">Flying pan</div>
        <button
          className="hero__nav__hamburger"
          onClick={() => {
            setnavClicked(true);
          }}
        >
          <span></span>
        </button>
        {navClicked && (
          <div
            className="hero__nav__list__overlay"
            onClick={() => {
              setnavClicked(false);
            }}
          >
            <button
              className="hero__nav__hamburger"
              onClick={() => {
                setnavClicked(false);
              }}
            >
              <span></span>
            </button>
            <ul className="hero__nav__list flex">
              <li className="hero__nav__list__item">
                <a href="#" className="hero__navLink">
                  home
                </a>
              </li>
              <li className="hero__nav__list__item">
                <a href="#" className="hero__navLink">
                  about
                </a>
              </li>
              <li className="hero__nav__list__item">
                <a href="#" className="hero__navLink">
                  contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navigation;
