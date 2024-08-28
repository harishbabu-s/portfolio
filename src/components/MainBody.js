import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from "react-pdf";

import "../styles/MainBody.css";
import { useTheme } from "../utils/ToggleTheme";
import track from "../assets/track.png";
import trackNight from "../assets/track-night.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MainBody = () => {
  const { darkMode } = useTheme();

  const [details, setDetails] = useState(
    "Click on any train window to see details."
  );

  const item = {
    born: "Born and brought up in Bangalore.\nMother tongue - Telugu.\n",
    school:
      "Did my primary schooling (1st standard - 7th standard) in Bethzada church school and then switched to Indiranagar highschool for higher schooling (8th standard – 10th standard).\nCompleted SSLC (Secondary school leaving certificate) in 2014 with a percentage of 74.40 ",
    puc: "With PCME ( Physics, Chemistry, Mathematics, Electronics) as main stream completed my 12th standard/ PUC(Pre-University certificate) at Cathedral composite PU college in 2016 with a percentage of 63.83. ",
    engg: "Completed Bachelors degree program in Mechatronics stream at Oxford college of engineering in 2020 with CGPA of 6.49 ",
    it: "Started my professional journey at Infosys as a fresher.  I worked for nearly 3 years, where I was officially designated as a Test Engineer. During my tenure, my role evolved significantly, and I was actively involved in various development activities.\nFor the first 2 years, I contributed to the RaboBank, Netherlands project, playing a key role in the development of the PMO portal. This experience allowed me to hone my skills in both development and project management.\nIn the subsequent year, I transitioned to working with ABN amro Bank, Netherlands, where I focused on Azure cloud services and API development. This role enabled me to gain valuable experience in cloud technologies and API integration. ",
    trs: "I have a background in front-end development with React JS. To broaden my skill set and pursue my goal of becoming a full stack developer, I've been expanding my knowledge in full stack technologies.\nAdditionally, driven by an interest in mobile app development, I completed a React Native specialization course.\nAt present, I am seeking opportunities where I can leverage both my front-end skills and my new full-stack capabilities. I am open to roles focused exclusively on front-end development as well as positions that offer the chance to apply my full-stack knowledge. My diverse experience equips me to contribute effectively in various development environments.",
    next: "Follow the destiny, but work hard to get complete control over the destiny",
  };

  const project_list = [
    {
      id: 1,
      title: "Portfolio",
      screenshots: {
        ss1: require("../assets/po_ss1.jpg"),
        ss2: require("../assets/po_ss2.jpg"),
        ss3: require("../assets/po_ss4.jpg"),
      },
      description:
        "Harishbabu S's portfolio containing various timelines, projects and their details, certificates and contact information",
    },
    {
      id: 2,
      title: "Little lemon",
      screenshots: {
        ss1: require("../assets/ll_ss1.jpg"),
        ss2: require("../assets/ll_ss3.jpg"),
      },
      description:
        'Final capstone project of "Meta React-Native specialization" course which demonstrates an application built for little lemon restaurant when customers can login and view the menu',
    },
    {
      id: 3,
      title: "Learn ABC 123",
      screenshots: {
        ss1: require("../assets/la1_ss1.jpg"),
        ss2: require("../assets/la1_ss2.jpg"),
        ss3: require("../assets/la1_ss3.jpg"),
        ss4: require("../assets/la1_ss4.jpg"),
        ss4: require("../assets/la1_ss5.jpg"),
      },
      description:
        "A simple application to learn english alphabets, numbers and calendar where the alphabets, numbers and date are read out loud when tapped",
    },
    {
      id: 4,
      title: "My Timer App ",
      screenshots: {
        ss1: "",
        ss2: "",
        ss3: "",
      },
      description:
        "Application contains personalised timers and reminders for various daily routines/tasks.",
    },
  ];

  const certificate_list = [
    {
      id: 1,
      title: "Meta React Native Specialization",
      path: require("../assets/MetaReactNative.pdf"),
    },
    {
      id: 2,
      title: "Programming with JavaScript",
      path: require("../assets/ProgramingwithJavaScript.pdf"),
    },
    {
      id: 3,
      title: "React Basics",
      path: require("../assets/ReactBasics.pdf"),
    },
    {
      id: 4,
      title: "Principles of UX/UI Design",
      path: require("../assets/PrinciplesofUXUIDesign.pdf"),
    },
    {
      id: 5,
      title: "AZ 900",
      path: "",
    },
  ];

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
          <div className="window puc" onClick={() => handleItemClick(item.puc)}>
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
        <div className="train it">
          <div className="window infy" onClick={() => handleItemClick(item.it)}>
            <p1>Work</p1>
            <p2>Infosys</p2>
            <p3>July 2021-July 2024</p3>
          </div>
          <div className="window trs" onClick={() => handleItemClick(item.trs)}>
            <p1>Present</p1>
            <p2>Learning</p2>
            <p3>Full-Stack Development</p3>
          </div>
        </div>
        <div className="train new" onClick={() => handleItemClick(item.next)}>
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
              <h2 className="proj-title">{project.title}</h2>
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
