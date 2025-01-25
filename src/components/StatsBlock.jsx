import React from "react";
import "../style/statsblock.css";

export const StatsBlock = () => {
  const stats = [
    { value: "5+", label: "years of experience" },
    { value: "100+", label: "projects completed" },
    { value: "∞", label: "ideas" },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <h1 className="stat-value">{stat.value}</h1>
          <p id="projects" className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsBlock;
