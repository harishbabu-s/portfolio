import React from "react";
import Switch from "react-switch";

import "../styles/Header.css";
import { useTheme } from "../utils/ToggleTheme";
import photo from "../assets/Harish.jpg";
import photoDark from "../assets/Harish-Dark.jpg";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import resume from "../assets/Resume/Harishbabu-S_Resume.pdf";

const Header = ({ Width }) => {
  const { darkMode, toggleTheme } = useTheme();
  const SwitchHeight =
    Width >= 1920 ? 45 : Width >= 1280 ? 35 : Width >= 768 ? 30 : 20;
  const SwitchWidth =
    Width >= 1920 ? 75 : Width >= 1280 ? 60 : Width >= 768 ? 50 : 35;
  const SwitchHandleDia =
    Width >= 1920 ? 35 : Width >= 1280 ? 28 : Width >= 768 ? 25 : 18;

    const name = "Harishbabu S";
    const formattedName = name.split('').map((letter) => {
      return letter === ' ' ? '\u00A0' : letter;
    });
  return (
    <header
      id="home"
      className={`header ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#time">Timeline</a>
          </li>
          <li>
            <a href="#proj">Projects</a>
          </li>
          <li>
            <a href="#cont">Contact</a>
          </li>
          <Switch
            onChange={toggleTheme}
            checked={darkMode}
            offColor="#0064d5"
            onColor="#021d2c"
            onHandleColor="#bbbbbb"
            offHandleColor="#dddddd"
            uncheckedHandleIcon={<uHI>☀️</uHI>} //☀️ ☀︎
            checkedHandleIcon={<cHI>🌙</cHI>} //🌙 ☾
            checkedIcon={false}
            uncheckedIcon={false}
            height={SwitchHeight}
            width={SwitchWidth}
            handleDiameter={SwitchHandleDia}
          />
          <li>
            <a
              className="resume"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <img
        src={darkMode ? moon : sun}
        alt={darkMode ? "🌙" : "☀️"}
        className="sun-moon"
      />

      <div className="info">
        <div className="name">
          {/* <h2>Harishbabu S</h2> */}
          {formattedName.map((letter, index) => (
                <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
                    {letter}
                </span>
            ))}
        </div>
        <p01>
          <b>Front-End Web|Mobile developer</b>
        </p01>
        <p02>
          Aspiring to be{" "}
          <asp>
            <strong>Full stack developer</strong>
          </asp>
          {/* <br /> */}
        </p02>
          <p03>
          Also was a <b>Test Automation Engineer</b>
          </p03>
      </div>

      <div className="image-container">
        <img
          src={darkMode ? photoDark : photo}
          width={300}
          alt="MyPhoto,notYours"
        />
      </div>

      <h2 className="tech-heading">Technologies</h2>
      <div className="tech-container">
        <ul>
          <li>React JS</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <ul>
          <li>React Native</li>
          <li>UI/UX</li>
          <li>Selenium</li>
          <li>Agile Methodology</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
