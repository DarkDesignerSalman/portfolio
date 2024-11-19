import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
        <h2 className="about-header animated-header">About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <img
              src="./about.jpg"
              alt="Md Salman Islam"
              className="about-img"
            />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm <strong>Md Salman Islam</strong>, a passionate and
              highly skilled full-stack developer and graphic designer with a
              robust foundation in cutting-edge technologies and design tools.
              Over the past several years, I have cultivated a deep
              understanding of both the technical and creative aspects of the
              digital world, enabling me to deliver innovative, efficient, and
              visually appealing solutions for my clients.
            </p>
            <p>
              With expertise spanning <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, <strong>SCSS</strong>,{" "}
              <strong>Tailwind CSS</strong>, and <strong>SASS</strong>, I have
              mastered the art of crafting pixel-perfect, responsive, and
              accessible web designs. I pride myself on building user interfaces
              that are not only aesthetically pleasing but also optimized for
              performance. My ability to seamlessly blend functionality with
              design ensures that every website I create offers an intuitive
              user experience.
            </p>
            <p>
              My proficiency in <strong>JavaScript</strong>,{" "}
              <strong>ReactJS</strong>, <strong>Next.js</strong>, and{" "}
              <strong>TypeScript</strong> enables me to develop dynamic,
              high-performance web applications tailored to meet diverse client
              requirements. Whether it’s building a single-page application with
              ReactJS or delivering a robust server-side rendered app using
              Next.js, I have the expertise to bring ideas to life. My
              familiarity with TypeScript further ensures type safety and
              scalability in all my projects, making my codebase reliable and
              maintainable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
