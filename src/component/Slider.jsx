import React, { useState, useEffect } from "react";
import "./header.css";
export default function Slider() {
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
  const cards = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/4539/4539261.png",
      header: "Graphic Design",
      text: "Creating visually appealing designs with tools like Illustrator and Photoshop.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/9364/9364669.png",
      header: "Web Design",
      text: "Designing responsive and user-friendly websites using React and HTML.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/256/12098/12098127.png",
      header: "UI/UX Design",
      text: "Enhancing user experience with innovative and seamless design solutions.",
    },
  ];
  const slides = [
    {
      image:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4085443/cover_image/regular_1708x683/image6-0eb48ff2cae97f9bb1d14533696ee1df.png",
    },
  ];

  return (
    <div>
      <div className="slider">
        <div className="slider-content">
          <div className="image-container">
            <img src={slides[0].image} alt="Slider" className="slider-image" />
            {/* <div className="clock">{currentTime}</div> */}
          </div>
          <div className="slider-text">
            Md Salman Islam is a skilled graphic and website designer with 5
            years of experience in graphic design and 3 years in web design.
            Proficient in tools like Figma, Adobe Illustrator, and Photoshop, he
            excels in creating visually appealing designs. With expertise in
            HTML, CSS, JavaScript, ReactJS, and UI/UX design, Md Salman Islam
            delivers seamless and responsive websites. His dedication to
            innovation and attention to detail make him a trusted professional
            for high-quality designs and user-friendly web solutions.
          </div>
          <div className="clock">{currentTime}</div>
        </div>
      </div>
      {/* Cards Section */}
      <div>
        <h2 className="about-header animated-header">Services</h2>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.header} className="card-image" />
            <h3 className="card-header">{card.header}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
