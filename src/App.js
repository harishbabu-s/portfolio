import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import MainBody from "./components/MainBody.js";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "window-width",
      `${windowWidth}px`
    );
  }, [windowWidth]);

  return (
      <div className="App">
        <Header Width={windowWidth} />
        <MainBody />
        <Footer />
      </div>
  );
}

export default App;
