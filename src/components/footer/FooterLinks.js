import React from "react";

function FooterLinks({ linkObj }) {
  return (
    <ul>
      {linkObj.map((item) => {
        return (
          <li className="footer__link__item">
            <a href="home">{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterLinks;
