import React, { useState } from "react";
import "./Carousel.css";

const images = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
  // "https://cdn.pixabay.com/photo/2016/02/25/17/08/fruit-1222488_1280.png",
];

const Carousel = () => {
  const [currentImageIndex, setcurrentImageIndex] = useState(0);

  const prevImage = () => {
    setcurrentImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextImage = () => {
    setcurrentImageIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevImage} className="nav-button">
        &lt;
      </button>
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt="carousel"
      />
      <button onClick={nextImage} className="nav-button">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
