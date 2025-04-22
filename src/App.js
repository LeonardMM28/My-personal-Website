import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Volunteering from "./components/Volunteering";
import Philosophy from "./components/Philosophy";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Accomplishments from "./components/Accomplishments";
import "./styles.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/professional-experience"
            element={<ProfessionalExperience />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accomplishments" element={<Accomplishments />} />
          <Route path="*" element={<Home />} /> {/* Fallback to Home */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
