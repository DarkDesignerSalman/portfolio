import React from "react";
import "./serviceMain.css";

export default function ServiceMain() {
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
  return (
    <div>
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
