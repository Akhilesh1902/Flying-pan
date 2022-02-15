import React from "react";
import FooterLinks from "./FooterLinks";
import FooterIcons from "./FooterIcons";
import "./footer.css";
function Footer() {
  const linkObj = [
    {
      name: "help and support",
      link: "#",
    },
    {
      name: "about our company",
      link: "#",
    },
    {
      name: "collegue quarrel",
      link: "#",
    },
    {
      name: "food and lunch",
      link: "#",
    },
    {
      name: "delecious meal",
      link: "#",
    },
  ];
  const icons = [
    {
      key: 0,
      name: "facebook",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#3B5998"/>
    <path d="M26.5016 38.1115V25.0542H30.106L30.5836 20.5546H26.5016L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6232 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5016Z" fill="white"/>
    </svg>
    `,
    },
  ];
  linkObj.forEach((item) => {
    console.log(item.name, item.link);
  });
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <FooterLinks linkObj={linkObj} />
          {/* <FooterLinks /> */}
        </div>
        <div className="footer__icons">
          <FooterIcons icons={icons} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
