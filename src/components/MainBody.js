import React, { useState } from "react";

import "../styles/MainBody.css";
import { useTheme } from "../utils/ToggleTheme";
import track from "../assets/track.png";
import trackNight from "../assets/track-night.png";

const MainBody = () => {
  const { darkMode } = useTheme();
  return (
    <main className={`main-body ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="timeline">
        <div className="train bspe">
          <div className="window born">
            <p1>Born</p1>
            <p2>Bangalore</p2>
            <p3>July 1998</p3>
          </div>
          <div className="window school">
            <p1>School</p1>
            <p2>SSLC / 10th</p2>
            <p3>April 2014</p3>
          </div>
          <div className="window puc">
            <p1>PUC/12th </p1>
            <p2>PCME</p2>
            <p3>2015-16</p3>
          </div>
          <div className="window engg">
            <p1>Degree</p1>
            <p2>Bachelor of Engineering</p2>
            <p3>2016 - 20</p3>
          </div>
        </div>
        <div className="train it">
          <div className="window infy">
            <p1>Work</p1>
            <p2>Infosys</p2>
            <p3>July 2021-July 2024</p3>
          </div>
          <div className="window trs">
            <p1>Present</p1>
            <p2>Learning</p2>
            <p3>Full-Stack Development</p3>
          </div>
        </div>
        <div className="train new">
          <div className="window next">
            <p1>Next...!</p1>
            <p2>Retire</p2>
            <p3></p3>
          </div>
        </div>
      </div>
      <img
        src={darkMode ? trackNight : track}
        alt="train-track"
        className="track"
      />
      {/* <div className="timeline-details "></div> */}
      {/* <div className="projects"></div> */}
      {/* <div id="det" className="details-container">
        <div className="details">{details}</div>
      </div>
      <div className="card-container">
        {items.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => handleItemClick(item.details)}
          >
            {item.content}
          </div>
        ))}
      </div> */}
    </main>
  );
};

export default MainBody;
