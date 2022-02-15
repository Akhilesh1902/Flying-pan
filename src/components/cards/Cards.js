import React from "react";
import "./cards.css";
function Cards() {
  return (
    <>
      <div className="card__container__overlay">
        <div className="card__container flex">
          <div className="card">
            <h1>Loarem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
          </div>
          <div className="card">
            <h1>Loarem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
          </div>
          <div className="card">
            <h1>Loarem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
