import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from "react-pdf";

import "../styles/MainBody.css";
import { useTheme } from "../utils/ToggleTheme";
import { item, project_list, certificate_list } from "../data/data";
import track from "../assets/track.png";
import trackNight from "../assets/track-night.png";
import gitIcon from "../assets/githubIcon.png";
import linkIcon from "../assets/linkIcon.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MainBody = () => {
  const { darkMode } = useTheme();

  const [details, setDetails] = useState(
    "Click on any train window to see details."
  );

  const handleItemClick = (itemDetails) => {
    setDetails(itemDetails);
  };

  return (
    <main className={`main-body ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div id="time" className="timeline">
        <div className="train bspe">
          <h2 className="timeline-heading">Timeline</h2>
          <div
            className="window born"
            onClick={() => handleItemClick(item.born)}
          >
            <p1>Born</p1>
            <p2>Bangalore</p2>
            <p3>July 1998</p3>
          </div>
          <div
            className="window school"
            onClick={() => handleItemClick(item.school)}
          >
            <p1>School</p1>
            <p2>SSLC / 10th</p2>
            <p3>April 2014</p3>
          </div>
          <div className="window puc"
            onClick={() => handleItemClick(item.puc)}
          >
            <p1>PUC/12th </p1>
            <p2>PCME</p2>
            <p3>2015-16</p3>
          </div>
          <div
            className="window engg"
            onClick={() => handleItemClick(item.engg)}
          >
            <p1>Degree</p1>
            <p2>Bachelor of Engineering</p2>
            <p3>2016 - 20</p3>
          </div>
        </div>
        <div className="train two">
          <div className="window two-one" onClick={() => handleItemClick(item.infy)}>
            <p1>Work</p1>
            <p2>Infosys</p2>
            <p3>Jul 2021 - Jul 2024</p3>
          </div>
          <div className="window two-two" onClick={() => handleItemClick(item.learning)}>
            <p1>Learning</p1>
            <p2>Self-learning</p2>
            <p3>Jul 2024 - Dec 2024</p3>
          </div>
        </div>
        <div className="train two">
          <div className="window two-one" onClick={() => handleItemClick(item.hcl)}>
            <p1>Work</p1>
            <p2>HCL Tech</p2>
            <p3>Jan 2025 - Nov 2025</p3>
          </div>
          <div className="window two-one" onClick={() => handleItemClick(item.bayer)}>
              <p1>Work</p1>
              <p2>Bayer</p2>
              <p3>Dec 2025 - Present</p3>
          </div>
        </div>
        <div className="train one" onClick={() => handleItemClick(item.next)}>
          <div className="window next">
            <p1>Next...!</p1>
            <p2>Work in your organization to prove my skills.</p2>
            <p3></p3>
          </div>
        </div>
        {/* <div className="train new" onClick={() => handleItemClick(item.later)}>
          <div className="window next">
            <p1>Later</p1>
            <p2>Retire</p2>
            <p3></p3>
          </div>
        </div> */}
      </div>
      <img
        src={darkMode ? trackNight : track}
        alt="train-track"
        className="track"
      />
      <div className="phase-details">
        <div id="det" className="details-container">
          <div className="details">
            {details.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < details.split("\n").length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div id="proj" className="projects-certificates-container">
        <h1 className="proj-heading">Projects</h1>
        <div className="projects-container">
          {project_list.map((project) => (
            <div key={project.id} className="projects">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 className="proj-title">{project.title}</h2>
                {project.link && <a href={project.link}>
                  <img
                    className="github-thumbnail"
                    src={linkIcon}
                    alt="App link"
                  />
                </a>}
                <a href={project.gitPath}>
                  <img
                    className="github-thumbnail"
                    src={gitIcon}
                    alt="Git Repo"
                  />
                </a>
              </div>
              <div className="screenshots">
                {Object.values(project.screenshots).map((src, index) => (
                  <img key={index} src={src} alt={`Screenshot ${index + 1}`} />
                ))}
              </div>
              <p className="proj-description">{project.description}</p>
            </div>
          ))}
        </div>
        <h1 className="cert-heading">Certificates</h1>
        <div className="certificates-container">
          {certificate_list.map((certificate) => (
            <div key={certificate.id} className="certificates">
              <h2 className="cert-title">{certificate.title}</h2>
              <a
                className="certificate-thumbnail"
                style={{ cursor: "pointer", display: "inline-block" }}
                href={certificate.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Document file={certificate.path} loading="Loading PDF...">
                  <Page pageNumber={1} scale={0.2} />
                </Document>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainBody;
