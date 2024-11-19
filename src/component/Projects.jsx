import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./projects.css";

export default function Projects() {
  const projectData = [
    {
      title: "Dyamic Megasoft Limited",
      image: "./project-01.png",
      link: "https://dynamicmegasoft.com/",
    },
    {
      title: "Dynamic ERP",
      image: "./project-02.png",
      link: "https://www.dynamicerp.us/",
    },
    {
      title: "dynamic Cloud",
      image: "./project-03.png",
      link: "https://www.dynamiccloud.us/",
    },
    {
      title: "dynamic Soft",
      image: "./project-04.png",
      link: "https://dynamicsoft.us/",
    },
  ];

  const graphicData = [
    {
      title: "Epic Enimal Momemt logo",
      image: "./logo-01.jpg",
      link: "https://dribbble.com/shots/14030749-Basketball-Logov",
    },
    {
      title: "Music-poster-design",
      image: "./logo-02.jpg",
      link: "https://dribbble.com/shots/19322812-Music-poster-design",
    },
    {
      title: "Epic Enimal logo",
      image: "./logo-03.jpg",
      link: "https://dribbble.com/shots/15328990-love-bird-logo-design",
    },
    {
      title: "Corporate-Banner-Design",
      image: "./logo-04.jpg",
      link: "https://dribbble.com/shots/19322480-Corporate-Banner-Design",
    },
  ];

  const videoData = [
    {
      title: "Text Effect Project",
      videoLink: "https://youtu.be/1aFCxAN9G5A",
      thumbnail: "./text-effect.png",
    },
    {
      title: "3D Cube Project",
      videoLink: "https://youtu.be/m-GMfdsCA7Iv",
      thumbnail: "./3d-cube.png",
    },
    {
      title: "DynamicSoft Project",
      videoLink: "https://youtu.be/U5sXhps7IVQ",
      thumbnail: "./dynamicsoft.png",
    },
    {
      title: "DynnamicERP Project",
      videoLink: "https://youtu.be/a9cCLH0Ug2E",
      thumbnail: "./dynamicerp.png",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="projects-container">
      <div>
        <h2 className="about-header animated-header">Projects</h2>
      </div>
      <h2 className="project-category">Web Development Project</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <div
              className="project-card-bg"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-card-overlay">
              <h3 className="project-card-title">{project.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <h2 className="graphic-category">Graphic Design Project</h2>
      <div className="projects-grid graphics-header">
        {graphicData.map((graphic, index) => (
          <a
            href={graphic.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <div
              className="project-card-bg"
              style={{ backgroundImage: `url(${graphic.image})` }}
            ></div>
            <div className="project-card-overlay">
              <h3 className="project-card-title">{graphic.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <h2 className="video-category">Video</h2>
      <div className="projects-grid video-grid">
        {videoData.map((video, index) => (
          <div
            className="video-card"
            key={index}
            onClick={() => setSelectedVideo(video.videoLink)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <h3 className="video-title">{video.title}</h3>
            <div className="video-icon">▶</div> {/* Play icon */}
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-player-container">
          <ReactPlayer
            url={selectedVideo}
            controls={true}
            width="100%"
            height="500px"
          />
          <button
            className="close-button"
            onClick={() => setSelectedVideo(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
