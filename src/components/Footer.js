import React from "react";

import "../styles/Footer.css";
import { useTheme } from "../utils/ToggleTheme";
import linkedinIcon from "../assets/linkedin.png";
import gmailIcon from "../assets/gmail.png";
import githubIcon from "../assets/github.png";
import whatsappIcon from "../assets/whatsapp.png";
import instagramIcon from "../assets/instagram.png";

const Footer = () => {
  const { darkMode } = useTheme();

  const navItems = [
    {
      id: 1,
      title: "LinkedIn",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/harishbabu-s/",
    },
    {
      id: 2,
      title: "Gmail",
      icon: gmailIcon,
      link: "mailto: harishbabu.sr2014@gmail.com",
    },
    {
      id: 3,
      title: "Github",
      icon: githubIcon,
      link: "https://www.github.com/harishbabu-s",
    },
    {
      id: 4,
      title: "Whatsapp",
      icon: whatsappIcon,
      link: "https://api.whatsapp.com/send/?phone=919901405981&text=Hi+%2AHarish%2A+😀",
    },
    {
      id: 5,
      title: "Instagram",
      icon: instagramIcon,
      link: "https://www.instagram.com/harishbabusr/",
    },
  ];

  return (
    <footer className={`foot ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* <img
        src={darkMode ? beachNight : beach}
        alt={darkMode ? "beach" : "beach-night"}
        className="foot-bg"
      /> */}
      <h4 id="cont" className="contact">
        Contact Me
      </h4>

      <nav className="navbar">
        <ul className="navList">
          {navItems.map((item) => (
            <li key={item.id} className="navItem">
              <a href={item.link} className="navLink">
                <img src={item.icon} alt={item.title} className="navIcon" />
                <span className="navTitle">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
