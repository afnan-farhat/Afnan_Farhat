"use client";

import React, { useState, useEffect } from "react";
import "./app.css";
import About from "@/Componant/About";
import Skill from "@/Componant/Skill";
import Project from "@/Componant/Project";
import Certificate from "@/Componant/Certificate";
import Achivement from "@/Componant/Achievement";
import Contact from "@/Componant/Contact";
import Footer from "@/Componant/Footer";

export default function Home() {
  const [activePage, setActivePage] = useState<string>("About");

  // Function to determine the current section based on scroll position
  const handleScroll = () => {
    const sections = [
      { id: "about", name: "About" },
      { id: "skills", name: "Skill" },
      { id: "projects", name: "Project" },
      { id: "certificates", name: "Certificate" },
      { id: "achivement", name: "Achivement" },
      { id: "contact", name: "Contact" }
    ];

    const scrollPosition = window.scrollY;

    // Iterate through sections to find the one that is currently visible
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i].id);
      if (section && scrollPosition >= section.offsetTop - 100) {
        setActivePage(sections[i].name);
      }
    }
  };

  // UseEffect to add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderPageContent = () => {
    switch (activePage) {

      case "Skill":
        return <Skill />;
      case "Project":
        return <Project />;
      case "Certificate":
        return <Certificate />;
      case "Achivement":
        return <Achivement />;
      case "Contact":
        return <Contact />;

    }
  };

  return (
    <div>
      <title>Afnan Farhat</title>


      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?css?family=Cairo" rel="stylesheet" />

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="my_logo.png" alt="Afnan Farhat" className="logo-image" />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${activePage === "About" ? "active" : ""}`}>
                <a className="nav-link" href="#about" onClick={() => setActivePage("About")}>
                  About Me
                </a>
              </li>
              <li className={`nav-item ${activePage === "Skill" ? "active" : ""}`}>
                <a className="nav-link" href="#skills" onClick={() => setActivePage("Skill")}>
                  Skills
                </a>
              </li>
              <li className={`nav-item ${activePage === "Project" ? "active" : ""}`}>
                <a className="nav-link" href="#projects" onClick={() => setActivePage("Project")}>
                  Projects
                </a>
              </li>
              <li className={`nav-item ${activePage === "Certificate" ? "active" : ""}`}>
                <a
                  className="nav-link"
                  href="#certificates"
                  onClick={() => setActivePage("Certificate")}
                >
                  Certificates
                </a>
              </li>
              <li className={`nav-item ${activePage === "Achivement" ? "active" : ""}`}>
                <a
                  className="nav-link"
                  href="#achivement"
                  onClick={() => setActivePage("Achivement")}
                >
                  Achievement
                </a>
              </li>
              <li className={`nav-item ${activePage === "Contact" ? "active" : ""}`}>
                <a className="nav-link" href="#contact" onClick={() => setActivePage("Contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dynamic Content */}
      <div className="container mt-5">{renderPageContent()}</div>

      {/* Sections with ids for scroll detection */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="projects">
        <Project />
        <div id="achivement">
        <Achivement />
      </div>
      </div>
      <div id="certificates">
        <Certificate />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      <Footer />


    </div>


  );
}
