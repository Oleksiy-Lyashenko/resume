import React from "react";
import "../style/brandexperience.css";
import img_1 from '../img/brand_img_1.png';
import img_2 from '../img/brand_img_2.png';
import img_3 from '../img/brand_img_3.png';
import star_img from '../img/brand_star.png';


const BrandExperience = () => {
  const brands = [
    { id: 1, image: img_1, title: "Sightline", class: "brand-card"}, // Replace with actual image paths
    { id: 2, image: img_2, title: "Access Dental", class: "brand-card brand-card-middle"},
    { id: 3, image: img_3, title: "Edge Innovation Centre", class: "brand-card"},
  ];

  return (
    <div className="brand-experience-container">
        <div className="brand-image-container">
            <img 
                src={star_img} 
                alt="Decorative star" 
                className="card-image" 
            />
        </div>
      <div className="brand-header">
        <h1 className="brand-title brand-title-1-line">
            <svg xmlns="http://www.w3.org/2000/svg" width="122" height="50" viewBox="0 0 122 50" fill="none">
                <path d="M105.354 25.3536C105.549 25.1583 105.549 24.8417 105.354 24.6464L102.172 21.4645C101.976 21.2692 101.66 21.2692 101.464 21.4645C101.269 21.6597 101.269 21.9763 101.464 22.1716L104.293 25L101.464 27.8284C101.269 28.0237 101.269 28.3403 101.464 28.5355C101.66 28.7308 101.976 28.7308 102.172 28.5355L105.354 25.3536ZM0 25.5H105V24.5H0V25.5Z" fill="white"/>
                <path d="M74.5488 16.5C77.9805 7.44056 86.7382 0.999999 97.0001 0.999999C110.255 0.999998 121 11.7452 121 25C121 38.2548 110.255 49 97.0001 49C86.7382 49 77.9805 42.5594 74.5488 33.5" stroke="white"/>
            </svg>
            Curated 
        </h1>
        <h1 className="brand-title brand-title-2-line">
            Brand
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                <path d="M25.5693 62L26.4745 38.3194L5.43066 51.0208L0 41.9792L22.1752 31L0 20.0208L5.43066 10.9792L26.4745 23.6806L25.5693 0H36.4307L35.5255 23.6806L56.5693 10.9792L62 20.0208L39.8248 31L62 41.9792L56.5693 51.0208L35.5255 38.3194L36.4307 62H25.5693Z" fill="url(#paint0_linear_42_2)"/>
                <defs>
                    <linearGradient id="paint0_linear_42_2" x1="31" y1="0" x2="31" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F254CB"/>
                    <stop offset="1" stop-color="#7EAAED"/>
                    </linearGradient>
                </defs>
            </svg>
        </h1>
        <h1 className="brand-title">
            Experiences
        </h1>
      </div>
      <div className="brands">
        {brands.map((brand) => (
          <div className={brand.class} key={brand.id}>
            <img src={brand.image} alt={brand.title} className="brand-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandExperience;

