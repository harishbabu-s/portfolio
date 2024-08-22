import React from "react";
import Switch from "react-switch";

import "../styles/Header.css";
import { useTheme } from "../utils/ToggleTheme";
import photo from "../assets/Harish.jpg";
import photoDark from "../assets/Harish-Dark.jpg";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import moonIcon from "../assets/moon-icon.png";
import icon from "../assets/fonto.ico";

const Header = ({ Width }) => {
  const { darkMode, toggleTheme } = useTheme();
  const SwitchHeight =
    Width >= 1920 ? 45 : Width >= 1280 ? 35 : Width >= 768 ? 30 : 20;
  const SwitchWidth =
    Width >= 1920 ? 75 : Width >= 1280 ? 60 : Width >= 768 ? 50 : 35;
  const SwitchHandleDia =
    Width >= 1920 ? 35 : Width >= 1280 ? 28 : Width >= 768 ? 25 : 18;

  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Timeline</a>
          </li>
          <li>
            <a href="#timeline">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
        </ul>
      </nav>
      <img
        src={darkMode ? moon : sun}
        alt={darkMode ? "🌙" : "☀️"}
        className="sun-moon"
      />

      <div className="info">
        <div className="name">
          <h2>Harishbabu S</h2>
        </div>
        <p01>
          <b>Front-End Mobile|Web developer</b>
        </p01>
        <p02>
          Aspiring to be{" "}
          <asp>
            <strong>Full stack developer</strong>
          </asp>
          <br />
          Also was a <b>Test Automation Engineer</b>
        </p02>
      </div>

      <div className="image-container">
        <img
          src={darkMode ? photoDark : photo}
          width={300}
          alt="MyPhoto,notYours"
        />
      </div>
    </header>
  );
};

export default Header;
