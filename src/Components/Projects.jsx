import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  FaAtom,
  FaProjectDiagram,
  FaDna,
  FaSatelliteDish,
} from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const [year, setYear] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const autoScrollRef = useRef(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const featuredProjects = [
    {
      title: "Quantum Secure Communication",
      description:
        "Developing a tamper-proof photonic communication system using quantum entanglement.",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Smart Optical Sensor",
      description:
        "Multi-wavelength sensor for real-time air quality and pollution tracking.",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Photonics AI Interface",
      description:
        "AI-powered optical detection system for intelligent imaging.",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Laser Medical Scanner",
      description:
        "High precision medical scanning using advanced laser optics.",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Optical Communication Grid",
      description: "Ultra high-speed photonic communication infrastructure.",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1581091012184-5c2e7c84e2b9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Green Energy Photovoltaics",
      description: "Next-generation solar harvesting with nano photonics.",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const projects = [
    {
      title: "Smart Traffic Light System",
      timeframe: "2023–2024",
      description:
        "A responsive traffic control system using IoT sensors and real-time data to improve city traffic flow.",
      investigators: "Ananya R, Ravi Kumar",
      image:
        "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=1200&q=80",
      sponsors: [
        {
          name: "IEEE",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg",
        },
        {
          name: "BMSIT",
          logo: "https://upload.wikimedia.org/wikipedia/en/6/65/B.M.S._Institute_of_Technology_and_Management_logo.png",
        },
      ],
    },
    {
      title: "Wearable Biophotonics Sensor",
      timeframe: "2024",
      description:
        "This device tracks blood oxygenation using photonic sensors and provides real-time health metrics.",
      investigators: "Neha M, Abhay Singh",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
      sponsors: [
        {
          name: "Photonics Society",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLxjTFkH6Zuzkubu8iIDl561KLBdIua6S1jYhZDtD5C01JQN_VRfQ703eemIG3wUPuxNbsE_pFck2qKcoDQIcoy0&s&ec=121528441",
        },
        {
          name: "MIT",
          logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
        },
      ],
    },
  ];

  const groupedSlides = useMemo(() => {
    const groups = [];
    for (let i = 0; i < featuredProjects.length; i += 3) {
      groups.push(featuredProjects.slice(i, i + 3));
    }
    return groups;
  }, [featuredProjects]);

  const totalSlides = groupedSlides.length;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  //   useEffect(() => {
  //     startAutoScroll();
  //     return stopAutoScroll;
  //   }, []);

  //   const stopAutoScroll = () => {
  //     if (autoScrollRef.current) {
  //       clearInterval(autoScrollRef.current);
  //     }
  //   };

  //   useEffect(() => {
  //     startAutoScroll();

  //     return () => stopAutoScroll();
  //   }, [carouselIndex]);

  const startAutoScroll = () => {
    stopAutoScroll(); // clear old interval first
    autoScrollRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  return (
    <div className="bg-[#f8f9fa] text-[#2d3748] font-sans">
      {/* PROJECTS SECTION */}
      <section className="bg-[#f9f9f9] pt-[60px] pb-10 px-5 text-center">
        <div className="bg-[#f8f9fa] py-10 border-b border-[#e0e0e0]">
          <h2 className="text-[2.8rem] font-bold text-[#0a1d4f] mb-2">
            OUR PROJECTS
          </h2>
          <p className="text-[#555] mb-8 text-[18px]">
            Explore the innovative works driven by our student community.
          </p>

          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="text"
              placeholder="Search projects..."
              className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg min-w-[200px] focus:border-[#007bff] focus:outline-none"
            />

            <select className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg min-w-[200px] focus:border-[#007bff] focus:outline-none">
              <option value="">Category</option>
              <option>Quantum Photonics</option>
              <option>Integrated Photonics</option>
              <option>Biophotonics</option>
              <option>Optical Communications</option>
              <option>Photovoltaics</option>
            </select>

            <select className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg min-w-[200px] focus:border-[#007bff] focus:outline-none">
              <option value="">Timeline</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>

            <select className="px-4 py-2 border border-[#ccc] bg-white text-[#2d3748] rounded-lg min-w-[200px] focus:border-[#007bff] focus:outline-none">
              <option value="">Impact Area</option>
              <option>Healthcare</option>
              <option>Environment</option>
              <option>Communication</option>
              <option>Energy</option>
            </select>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1100px] mx-auto my-10 px-4">
          <div className="bg-[#f7f7f7] p-9 rounded-xl shadow-md hover:-translate-y-1 transition cursor-pointer">
            <FaAtom className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">Quantum Photonics</span>
          </div>

          <div className="bg-[#f7f7f7] p-9 rounded-xl shadow-md hover:-translate-y-1 transition cursor-pointer">
            <FaProjectDiagram className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">
              Integrated Photonics
            </span>
          </div>

          <div className="bg-[#f7f7f7] p-9 rounded-xl shadow-md hover:-translate-y-1 transition cursor-pointer">
            <FaDna className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">Biophotonics</span>
          </div>

          <div className="bg-[#f7f7f7] p-9 rounded-xl shadow-md hover:-translate-y-1 transition cursor-pointer">
            <FaSatelliteDish className="text-[2rem] text-[#f57c00] mb-2 mx-auto" />
            <span className="font-semibold text-[#333]">
              Optical Communications
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] mx-auto mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-3xl shadow-2xl overflow-hidden group transition duration-500 hover:scale-[1.015] hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[240px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 text-center">
                {/* Title */}
                <h3 className="text-2xl font-bold tracking-wide mb-2">
                  {project.title}
                  <span className="text-black text-lg ml-2 font-medium">
                    ({project.timeframe})
                  </span>
                </h3>

                {/* Divider */}
                <div className="w-16 h-[3px] bg-gradient-to-r from-[#003b5c] to-[#00629b] mx-auto mb-6 rounded-full"></div>

                {/* Description */}
                <p className="text-black leading-relaxed mb-6 text-[15px]">
                  {project.description}
                </p>

                {/* Investigators */}
                <p className="mb-8 text-[15px]">
                  <span className="font-semibold text-black">
                    Investigators:
                  </span>{" "}
                  <span className="text-black">{project.investigators}</span>
                </p>

                {/* Sponsors */}
                <h4 className="text-lg font-semibold mb-4 tracking-wide">
                  Sponsors
                </h4>

                <div className="flex justify-center items-center gap-10 mb-8 flex-wrap">
                  {project.sponsors.map((sponsor, i) => (
                    <div key={i} className="flex flex-col items-center group">
                      <div className="bg-white rounded-lg p-2 shadow-md transition group-hover:shadow-lg">
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
                <button className="px-10 py-3 text-white bg-[#003b5c] to-[#00629b] rounded-xl font-semibold tracking-wide shadow-lg transition duration-300 hover:shadow-[0_8px_20px_rgba(0,98,155,0.6)] hover:-translate-y-1">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white text-center">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-[2.5rem] font-bold text-[#003b5c] mb-14 tracking-wide">
            FEATURED PROJECTS
          </h2>

          <div
            className="relative"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
          >
            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 
              w-[52px] h-[52px] bg-white border-2 border-[#003b5c] 
              rounded-full flex items-center justify-center 
              text-[#003b5c] shadow-lg z-10
              transition duration-300
              hover:bg-[#003b5c] hover:text-white hover:scale-110"
            >
              <FaChevronLeft size={18} />
            </button>

            {/* CAROUSEL */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${carouselIndex * 100}%)`,
                }}
              >
                {groupedSlides.map((group, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex">
                    {group.map((project, index) => (
                      <div
                        key={index}
                        className="w-full md:w-1/2 lg:w-1/3 px-4"
                      >
                        <div
                          className="bg-white rounded-3xl shadow-xl overflow-hidden 
                          transition duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                          {/* IMAGE */}
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-[240px] object-cover transition duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          </div>

                          {/* CONTENT */}
                          <div className="p-8 text-left">
                            <h3 className="text-[1.4rem] text-[#003b5c] font-semibold mb-3">
                              {project.title}
                            </h3>

                            <p className="text-[#4a5568] mb-5 leading-relaxed">
                              {project.description}
                            </p>

                            <span
                              className={`inline-block px-5 py-1.5 rounded-full text-sm font-semibold mb-6 ${
                                project.status === "Active"
                                  ? "bg-gradient-to-r from-[#d1f5e0] to-[#a7e6c7] text-[#067d45]"
                                  : "bg-gradient-to-r from-[#dbeafe] to-[#bfdbfe] text-[#2563eb]"
                              }`}
                            >
                              {project.status}
                            </span>

                            <button
                              className="px-6 py-2 bg-[#003b5c] to-[#00629b] 
                              text-white rounded-xl font-semibold shadow-md 
                              transition duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 
              w-[52px] h-[52px] bg-white border-2 border-[#003b5c] 
              rounded-full flex items-center justify-center 
              text-[#003b5c] shadow-lg z-10
              transition duration-300
              hover:bg-[#003b5c] hover:text-white hover:scale-110"
            >
              <FaChevronRight size={18} />
            </button>
          </div>
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
