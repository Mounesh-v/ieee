import React, { useEffect, useState, useRef } from "react";
import { FaAtom, FaProjectDiagram, FaDna, FaSatelliteDish } from "react-icons/fa";

const useInView = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, isInView];
};

const Projects = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const projects = [];

  const [projectsSectionRef, projectsSectionInView] = useInView();
  const [categoriesRef, categoriesInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <div className="bg-[#f8f9fa] text-[#2d3748] font-sans">
      {/* PROJECTS SECTION */}
      <section
        ref={projectsSectionRef}
        className={`bg-[#f9f9f9] pt-[60px] pb-10 px-5 text-center transition-all duration-700 ease-out transform ${
          projectsSectionInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-[#f8f9fa] py-10 border-b border-[#e0e0e0]">
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#0a1d4f] mb-2">
            OUR PROJECTS
          </h2>
          <p className="text-[#555] mb-10 text-base sm:text-lg max-w-[640px] mx-auto">
            Explore the innovative works driven by our student community.
          </p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 items-center">
            <input
              type="text"
              placeholder="Search projects..."
              className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg w-full sm:min-w-[200px] sm:w-auto focus:border-[#007bff] focus:outline-none"
            />

            <select className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg w-full sm:min-w-[200px] sm:w-auto focus:border-[#007bff] focus:outline-none">
              <option value="">Category</option>
              <option>Quantum Photonics</option>
              <option>Integrated Photonics</option>
              <option>Biophotonics</option>
              <option>Optical Communications</option>
              <option>Photovoltaics</option>
            </select>

            <select className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg w-full sm:min-w-[200px] sm:w-auto focus:border-[#007bff] focus:outline-none">
              <option value="">Timeline</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>

            <select className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg w-full sm:min-w-[200px] sm:w-auto focus:border-[#007bff] focus:outline-none">
              <option value="">Impact Area</option>
              <option>Healthcare</option>
              <option>Environment</option>
              <option>Communication</option>
              <option>Energy</option>
            </select>
          </div>
        </div>

        {/* Category Cards */}
        <div
          ref={categoriesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1100px] mx-auto my-12 px-4 transition-all duration-700 ease-out transform ${
            categoriesInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-[#f7f7f7] p-9 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <FaAtom className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">Quantum Photonics</span>
          </div>

          <div className="bg-[#f7f7f7] p-9 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <FaProjectDiagram className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">
              Integrated Photonics
            </span>
          </div>

          <div className="bg-[#f7f7f7] p-9 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <FaDna className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">Biophotonics</span>
          </div>

          <div className="bg-[#f7f7f7] p-9 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <FaSatelliteDish className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">
              Optical Communications
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-[1200px] mx-auto mt-14 px-4 transition-all duration-700 ease-out transform ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-[#1a202c] rounded-3xl shadow-lg overflow-hidden group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl focus-within:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 text-center flex flex-col h-full">
                {/* Title */}
                <h3 className="text-2xl font-bold tracking-wide mb-1 text-[#003b5c]">
                  {project.title}
                  <span className="text-[#4a5568] text-base sm:text-lg ml-2 font-medium">
                    ({project.timeframe})
                  </span>
                </h3>

                {/* Divider */}
                <div className="w-16 h-[3px] bg-gradient-to-r from-[#003b5c] to-[#00629b] mx-auto mb-6 rounded-full"></div>

                {/* Description */}
                <p className="text-[#4a5568] leading-relaxed mb-6 text-[15px]">
                  {project.description}
                </p>

                {/* Investigators */}
                <p className="mb-8 text-[15px]">
                  <span className="font-semibold text-[#2d3748]">
                    Investigators:
                  </span>{" "}
                  <span className="text-[#4a5568]">{project.investigators}</span>
                </p>

                {/* Sponsors */}
                <h4 className="text-lg font-semibold mb-4 tracking-wide text-[#2d3748]">
                  Sponsors
                </h4>

                <div className="flex justify-center items-center gap-10 mb-8 flex-wrap">
                  {project.sponsors.map((sponsor, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <div className="bg-white rounded-lg p-2 shadow-md transition-shadow duration-300 group-hover:shadow-lg">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                      <span className="text-sm text-[#b0b0b0] mt-2">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                  className="mt-auto inline-flex items-center justify-center px-10 py-3 text-white bg-[#003b5c] to-[#00629b] rounded-xl font-semibold tracking-wide shadow-lg transition-all duration-300 hover:shadow-[0_8px_20px_rgba(0,98,155,0.6)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00629b]"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="bg-[#f3f5f7] py-24 px-6 text-center">
        <div className="max-w-[1200px] mx-auto">
          {/* Heading */}
          <h2 className="text-[3rem] font-bold text-[#0b3c5d] mb-6">
            Get Involved
          </h2>

          {/* Subtitle */}
          <p className="text-[#5b6b7b] text-lg mb-16 max-w-[800px] mx-auto leading-relaxed">
            Become an active part of our innovation journey. Here’s how you can
            contribute and grow with us!
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-12 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-[#0b3c5d] mb-6">
                Join Existing Projects
              </h3>

              <p className="text-[#5b6b7b] mb-10 leading-relaxed">
                Collaborate with peers on ongoing projects. Learn new skills,
                contribute ideas, and make an impact.
              </p>

              <button className="px-8 py-3 bg-[#0b5c85] hover:bg-[#00629b] text-white rounded-xl font-semibold shadow-md transition duration-300">
                Explore Projects
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-12 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-[#0b3c5d] mb-6">
                Submit a Proposal
              </h3>

              <p className="text-[#5b6b7b] mb-10 leading-relaxed">
                Have a unique idea? Share your proposal with the team and bring
                it to life with our support.
              </p>

              <button className="px-8 py-3 bg-[#0b5c85] hover:bg-[#00629b] text-white rounded-xl font-semibold shadow-md transition duration-300">
                Submit Idea
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-12 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold text-[#0b3c5d] mb-6">
                Access Funding & Resources
              </h3>

              <p className="text-[#5b6b7b] mb-10 leading-relaxed">
                We offer access to institutional funding, lab equipment, and
                mentorship to support your innovation.
              </p>

              <button className="px-8 py-3 bg-[#0b5c85] hover:bg-[#00629b] text-white rounded-xl font-semibold shadow-md transition duration-300">
                View Resources
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
