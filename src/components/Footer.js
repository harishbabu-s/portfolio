import React from "react";

import "../styles/Footer.css";
import { useTheme } from "../utils/ToggleTheme";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`foot ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* <img
        src={darkMode ? beachNight : beach}
        alt={darkMode ? "beach" : "beach-night"}
        className="foot-bg"
      /> */}

      {/* <video className="bw" autoPlay muted loop>
        <source src="../assets/beach-waves.mp4" type="video/mp4" />
      </video> */}
      <ul className="contact">
        <li>
          {/* <a key={url} href={url} icon={icon} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon key={url} icon={icon} size="2x" />
          </a> */}
        </li>
        <li>
          {/* <a key={url} href={url} icon={icon} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon key={url} icon={icon} size="2x" />
          </a> */}
        </li>
        <li>
          {/* <a key={url} href={url} icon={icon} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon key={url} icon={icon} size="2x" />
          </a> */}
        </li>
        <li>
          {/* <a key={url} href={url} icon={icon} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon key={url} icon={icon} size="2x" />
          </a> */}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
