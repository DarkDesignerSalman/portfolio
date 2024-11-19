import React from "react";
import { motion } from "framer-motion";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiMysql,
} from "react-icons/si";
import {
  MdOutlineDesignServices,
  MdOutlineInsertDriveFile,
} from "react-icons/md";
import { AiOutlinePicture, AiOutlineScissor } from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";
import {
  FaIdCard,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import "./skills.css";

export default function Skills() {
  const webSkills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "SASS", icon: <FaSass /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "NextJS", icon: <SiNextdotjs /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "NodeJS", icon: <FaNodeJs /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  const graphicSkills = [
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Logo Design", icon: <MdOutlineDesignServices /> },
    { name: "Flyer Design", icon: <MdOutlineInsertDriveFile /> },
    { name: "Poster Design", icon: <AiOutlinePicture /> },
    { name: "Banner Design", icon: <BiRectangle /> },
    { name: "Business Card", icon: <FaIdCard /> },
    { name: "Background Remove", icon: <AiOutlineScissor /> },
  ];

  // Animation Variants
  const containerVariants = {
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300 },
    },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <div className="skills-container">
      <div>
        <h2 className="skills-header animated-header">Skills</h2>
      </div>

      <h2 className="skills-category">Web Development Skills</h2>
      <motion.div
        className="skills-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {webSkills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={index}
            variants={itemVariants}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <h2 className="skills-category">Graphic Design Skills</h2>
      <motion.div
        className="skills-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {graphicSkills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={index}
            variants={itemVariants}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
