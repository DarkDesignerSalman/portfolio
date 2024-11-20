import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./header.css"; // Make sure this contains the styles you need

export default function Slider() {
  // State to hold current time
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Define the image and caption for the single slide
  const slide = {
    image: "./slider.png",
    alt: "Graphic Design",
    caption: `Md Salman Islam is a skilled graphic and website designer with 5
            years of experience in graphic design and 3 years in web design.
            Proficient in tools like Figma, Adobe Illustrator, and Photoshop, he
            excels in creating visually appealing designs. With expertise in
            HTML, CSS, JavaScript, ReactJS, and UI/UX design, Md Salman Islam
            delivers seamless and responsive websites. His dedication to
            innovation and attention to detail make him a trusted professional
            for high-quality designs and user-friendly web solutions.`,
  };

  return (
    <Carousel data-bs-theme="dark" controls={false}>
      <Carousel.Item>
        <div className="carousel-slide-container">
          <img className="d-block w-50" src={slide.image} alt={slide.alt} />
          <div className="carousel-text-overlay">
            <h5 className="caption">{slide.caption}</h5>
          </div>
          <div className="carousel-clock-overlay">
            <p className="clock">{currentTime}</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
