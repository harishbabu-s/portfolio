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
          <div className="window born">Born</div>
          <div className="window school">School</div>
          <div className="window puc">Pre-university</div>
          <div className="window engg">Engineering</div>
        </div>
        <div className="train it">
          <div className="window infy">Infosys</div>
          <div className="window trs">Transition</div>
        </div>
        <div className="train new">
          <div className="window next">Next...!</div>
        </div>
      </div>
      <img
        src={darkMode ? trackNight : track}
        alt="train-track"
        className="track"
      />
      {/* <div className="mobile-helper"></div> */}
      <div className="timeline-details "></div>
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
