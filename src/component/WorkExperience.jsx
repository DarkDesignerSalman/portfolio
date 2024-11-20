import React from "react";
import "./workexperience.css";
import "./about.css";

export default function WorkExperience() {
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

      <div className="work-experience">
        <div className="work-header">
          <h2 className="animated-header">Work Experience</h2>
        </div>

        <div className="table-box">
          <div className="company-info">
            <h3 className="company-name">Dynamic Megasoft Limited</h3>
            <p className="role">Web Developer & Software Developer</p>
            <p className="duration">January 2022 – Present</p>
          </div>
          <div className="table-container">
            <div className="table-row">
              <div className="table-cell">
                <h4 className="sub-title">Key Technologies:</h4>
              </div>
              <div className="table-cell">
                <p className="technologies">
                  React.js, Angular, Next.js, TypeScript, JavaScript, HTML, CSS,
                  Bootstrap 5, SQL, SASS, Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                <h4 className="sub-title">Responsibilities:</h4>
              </div>
              <div className="table-cell">
                <ul className="responsibilities">
                  <li>Designed and developed responsive web applications.</li>
                  <li>Implemented front-end animations using React.js.</li>
                  <li>Ensured cross-browser compatibility.</li>
                  <li>Developed and maintained dynamic dashboards and APIs.</li>
                  <li>
                    Collaborated with designers to produce visually appealing
                    designs.
                  </li>
                </ul>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                <h4 className="sub-title">Achievements:</h4>
              </div>
              <div className="table-cell">
                <ul className="achievements">
                  <li>Successfully completed several projects, including:</li>
                  <ul>
                    <li>Dynamic Megasoft Website (dynamicmegasoft.com)</li>
                    <li>DynamicSoft Website (dynamicsoft.us)</li>
                    <li>DynamicERP Platform (dynamicerp.us)</li>
                    <li>DynamicCloud Platform (dynamiccloud.us)</li>
                  </ul>
                  <li>
                    Created software tools like Data Connector and Trim (offline
                    solutions).
                  </li>
                </ul>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell">
                <h4 className="sub-title">Specialization in Animations:</h4>
              </div>
              <div className="table-cell">
                <ul className="specialization">
                  <li>Utilized React.js libraries like Framer Motion.</li>
                  <li>
                    Designed animated UI/UX features for user experiences.
                  </li>
                  <li>Applied CSS transitions and keyframe animations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
