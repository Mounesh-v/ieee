import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
import "./about_style.css";

const About = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());

    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      {/* <header>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="IEEE Photonics Society Logo" />
            <div className="logo-text">
              <h1>IEEE Photonics BMSIT&M</h1>
              <p>Advancing the science and technology of light</p>
            </div>
          </div>

          <nav className={isMenuOpen ? "active" : ""}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/execome">Execome</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/projects">Our Projects</Link>
              </li>
              <li>
                <Link to="/membership">Membership</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </header> */}

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h2>About IEEE Photonics</h2>
          <p>Empowering Innovation in Light-Based Technologies</p>
        </div>
      </section>

      {/* ================= ABOUT PHOTONICS ================= */}
      <section className="info-section">
        <div className="about-photonics-content fade-in">
          <h2 className="section-title">About Photonics</h2>
          <div className="about-text">
            <p>
              The IEEE Photonics Society is dedicated to advancing the
              scientific and educational aspects of photonics. The Society
              strives for the advancement of the theory and practice of
              photonics, optoelectronics, and electro-optics engineering and
              science, and of the allied arts and sciences, and for the
              maintenance of high professional standards among its members.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="info-section alt-bg">
        <h2 className="section-title">Our Mission & Vision</h2>

        <div className="card-container">
          <div className="card fade-in">
            <h3>🎯 Mission</h3>
            <p>
              Our <strong>Mission</strong> is to foster the development and
              facilitate the exchange of scientific and technological knowledge
              in photonics that benefits members, the profession and humanity.
            </p>
          </div>

          <div className="card fade-in">
            <h3>🌍 Vision</h3>
            <p>
              Our <strong>Vision</strong> is to be the most recognized and
              respected global organization in photonics and optoelectronics.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section className="info-section alt-bg">
        <h2 className="section-title">Focus Areas</h2>

        <div className="card-container">
          <div className="card fade-in">
            <h3>💡 Research</h3>
            <p>
              Promoting student-led research projects in lasers, optical fibers,
              and quantum technologies.
            </p>
          </div>

          <div className="card fade-in">
            <h3>🤝 Collaboration</h3>
            <p>
              Partnering with industry experts and academia for workshops and
              seminars.
            </p>
          </div>

          <div className="card fade-in">
            <h3>📚 Knowledge Sharing</h3>
            <p>
              Encouraging peer-to-peer learning, tech talks, and hands-on
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="info-section">
        <h2 className="section-title">Highlights</h2>

        <div className="timeline">
          <div className="timeline-item fade-in">
            <span className="year">2023</span>
            <p>
              Founded the IEEE Photonics Club in our college with 50+ student
              members.
            </p>
          </div>

          <div className="timeline-item fade-in">
            <span className="year">2024</span>
            <p>
              Organized our first National Level Photonics Workshop with experts
              from academia.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      {/* <footer>
        <div className="max-w-[1200px] mx-auto px-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px]">
          {[
            {
              title: "About Us",
              items: ["Our Mission", "Leadership", "Chapters", "Awards"],
            },
            {
              title: "Membership",
              items: ["Join Now", "Benefits", "Student Resources", "Volunteer"],
            },
            {
              title: "Publications",
              items: ["Journals", "Magazines", "Newsletters", "Standards"],
            },
            {
              title: "Connect",
              items: [
                "Contact Us",
                "Social Media",
                "Career Center",
                "IEEE.org",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
                {section.title}
                <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50"></span>
              </h3>

              <ul className="space-y-[18px]">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white/80 text-[18px] transition-all duration-300 inline-block hover:text-white hover:translate-x-[6px]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="copyright">
          &copy; {year} IEEE Photonics Society. All rights reserved.
        </div>
      </footer> */}
    </>
  );
};

export default About;
