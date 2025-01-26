import React, { useEffect, useState } from "react";
import "../style/introblock.css";
import introPhoto from '../img/intro_photo.png';

export const IntroBlock = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the rotation speed as desired (e.g., dividing scrollY by a factor)
      setRotation(window.scrollY / 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="intro-container" id="intro">
      <div className="intro-left">
        <div className="logo">
          <span className="logo-icon">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="26" height="26" 
              viewBox="0 0 26 26" 
              fill="none" 
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.1s ease-out", // Optional smooth rotation
              }}
            >
            <path d="M10.7226 26.0001L11.1022 16.0695L2.27737 21.3959L0 17.6042L9.29927 13.0001L0 8.39589L2.27737 4.60423L11.1022 9.93062L10.7226 6.10352e-05H15.2774L14.8978 9.93062L23.7226 4.60423L26 8.39589L16.7007 13.0001L26 17.6042L23.7226 21.3959L14.8978 16.0695L15.2774 26.0001H10.7226Z" fill="#F254CB"/>
          </svg></span> meet iryna
        </div>
        <img
          src={introPhoto}
          alt="Iryna"
          className="intro-image"
        />
        <div className="intro-scroll-indicator" onClick={scrollToProjects} role="button" tabIndex={0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="122" viewBox="0 0 50 122" fill="none">
            <path className="scroll-arrow-intro" d="M24.6464 105.354C24.8417 105.549 25.1583 105.549 25.3535 105.354L28.5355 102.172C28.7308 101.976 28.7308 101.66 28.5355 101.464C28.3403 101.269 28.0237 101.269 27.8284 101.464L25 104.293L22.1716 101.464C21.9763 101.269 21.6597 101.269 21.4645 101.464C21.2692 101.66 21.2692 101.976 21.4645 102.172L24.6464 105.354ZM24.5 -2.18557e-08L24.5 105L25.5 105L25.5 2.18557e-08L24.5 -2.18557e-08Z" fill="#7EAAED"/>
            <path className="scroll-circle-intro" d="M33.5 74.5487C42.5594 77.9804 49 86.7381 49 97C49 110.255 38.2548 121 25 121C11.7452 121 1 110.255 1 97C1 86.7381 7.44057 77.9804 16.5 74.5487" stroke="#7EAAED"/>
          </svg>
        </div>
      </div>
      <div className="intro-right">
        <h1 className="intro-title">Hello <br />there!</h1>
        <div className="intro-description-container">
          <p className="intro-description">
          Hi, I’m Iryna – a creative force originally from Ukraine, now thriving in Newfoundland since 2016. Known for my creative, collaborative approach and a sharp eye for detail, I thrive on delivering high-quality results that exceed expectations. My adaptability to evolving project needs, combined with expertise in visual communication and layout design, allows me to tackle challenges with a fresh perspective. 
          As a self-taught designer, I excel at thinking outside the box and leveraging resources to find the most effective solutions...Oh, and I’m that person who loves a good chat and makes teamwork feel like a breeze!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
