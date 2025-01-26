import React from "react";
import "../style/card.css";
import img_1 from '../img/sp-img-1.png';
import img_2 from '../img/sp-img-2.png';
import img_3 from '../img/sp-img-3.png';
import img_4 from '../img/sp-img-4.png';
import award_img_1 from "../img/project_award_1.png"
import award_img_2 from "../img/project_award_2.png"

export const Cards = () => {
  const projects = [
    {
      id: 1,
      image: img_1, // Replace with actual image paths
      title: "Mary Browns Centre",
      class: "card card-col-1",
      title_class: "card-title",
      description: [
        "2023 Silver Winner of W3",
        "Experience and Entertainment.",
        "Redesigned the Mary Brown's Centre website from the ground up, focusing on intuitive navigation and a visually engaging design that truly resonates with users. I wanted to create an experience that felt both fun and seamless, making it easy for visitors to connect with the brand. It's a testament to the impactful, interactive experience I was able to craft, one that continues to captivate users and elevate the brand."
      ],
      awards: award_img_1,
      link: "https://mbcentre.ca/",
      figma: "https://www.figma.com/design/OIGI2avPtMi29nbcnb8tCf/Mary-Brown's_Iryna-Healey?node-id=0-1&t=UFANWk1DjzGWT69n-1"
    },
    {
      id: 2,
      image: img_2, // Replace with actual image paths
      title: "Community Sector Council NL (CSCN)",
      class: "card card-col-2",
      title_class: "card-title",
      description: [
        "2024 Silver Winner of Davey Awards",
        "Features: Website Redesign",
        "General: Associations",
        "The client needed a fresh, modern look – and we delivered. Our team developed a new brand strategy and logo, setting the stage for a complete website transformation. I was tasked with creating a fun, approachable, and user-friendly experience that resonates with visitors. It still brings a smile to my face, knowing it truly captured the brand's essence and engaged its audience."
      ],
      awards: award_img_2,
      link: "https://cscnlstag.wpengine.com/"
    },
    {
        id: 3,
        image: img_3, // Replace with actual image paths
        title: "Markland Engineering",
        class: "card card-col-3",
        title_class: "card-title card-title-gray",
        description:
          "Created Markland Engineering Brand and website with a focus on clear structure and enhanced accessibility. I streamlined navigation for a more intuitive user journey and ensured the design was fully accessible, meeting all key accessibility standards. The result? A user-friendly, inclusive experience that helps visitors engage with the brand effortlessly.",
        link: "https://marklandgroup.ca/",
    },
    {
        id: 4,
        image: img_4, // Replace with actual image paths
        title: "BlockLab",
        class: "card",
        title_class: "card-title card-title-gray",
        link: "https://blocklab.ca/",
        description:
          "Designed the Blocklab website with a bold departure from typical blockchain aesthetics. The client wanted something fresh, eco-friendly, and user-centric. I crafted a clean, intuitive design that blends sustainability with ease of use, offering a seamless experience while aligning with their green, forward-thinking vision.",
    },
  ];

  return (
    <div className="cards-container">
      {projects.map((project) => (
        <div className={project.class} key={project.id}>
          <div className="card-image-container">
            <img src={project.image} alt={project.title} className="card-image" />
            <a className="image-overlay" href={project.link} target="_blank">
              <button className="btn img overlay-button">View Live</button>
            </a>
            {project.awards && (
              <img 
                src={project.awards} 
                alt="Award badge" 
                className="award-image"
              />
            )}
          </div>
          <div className="card-content">
            <h3 className={project.title_class}>{project.title}</h3>
            {Array.isArray(project.description) ? (
              project.description.map((desc, index) => (
                <p key={index} className="card-description">{desc}</p>
              ))
            ) : (
              <p className="card-description">{project.description}</p>
            )}
            <div className="card-buttons">
              <a className="btn primary" href={project.link} target="_blank">View Live</a>
              {project.figma && (
                <a className="btn primary" href={project.figma} target="_blank" rel="noopener noreferrer">View Figma</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
