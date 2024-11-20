import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Service";
import AllComponent from "./AllComponent";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import WorkExperience from "./WorkExperience";

export default function Linkpage() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllComponent />} />
        <Route path="/service" element={<Service />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ensure correct path */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
