import React from "react";
import "../style/selectedprojects.css";
import Cards from "./Card";

export const SelectedProjects = () => {
  return (
    <div className="selected-projects-container">
      <div className="selected-head-container">
          <h1 className="selected-title">
          <div className="gradient-asterisk">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M32.9927 80L34.1606 49.4444L7.0073 65.8333L0 54.1667L28.6131 40L0 25.8333L7.0073 14.1667L34.1606 30.5556L32.9927 0H47.0073L45.8394 30.5556L72.9927 14.1667L80 25.8333L51.3869 40L80 54.1667L72.9927 65.8333L45.8394 49.4444L47.0073 80H32.9927Z" fill="url(#paint0_linear_19_56)"/>
                  <defs>
                      <linearGradient id="paint0_linear_19_56" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F254CB"/>
                      <stop offset="1" stop-color="#7EAAED"/>
                      </linearGradient>
                  </defs>
              </svg>
          </div>
          Selected <br /> Projects
          </h1>
        <p className="selected-subtitle">
          Curated collection of my best work, showcasing innovative designs,
          seamless user experiences, and creative problem-solving across diverse
          projects.
        </p>
      </div>

    <Cards />
    </div>
  );
};

export default SelectedProjects;
