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

  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedSlides = useMemo(() => {
    const groups = [];
    for (let i = 0; i < featuredProjects.length; i += cardsPerSlide) {
      groups.push(featuredProjects.slice(i, i + cardsPerSlide));
    }
    return groups;
  }, [featuredProjects, cardsPerSlide]);

  const totalSlides = groupedSlides.length;

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  const startAutoScroll = () => {
    stopAutoScroll(); 
    autoScrollRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
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
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-bold text-[#0a1d4f] mb-2">
            OUR PROJECTS
          </h2>
          <p className="text-[#555] mb-8 text-base sm:text-lg">
            Explore the innovative works driven by our student community.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1100px] mx-auto my-10 px-4">
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

      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-gradient-to-br from-[#f8f9fa] to-white text-center">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#003b5c] mb-10 md:mb-14 tracking-wide">
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
                      <div key={index} className="flex-1 px-4">
                        <div
                          className="bg-white rounded-3xl shadow-xl overflow-hidden 
                          transition duration-500 hover:shadow-2xl hover:-translate-y-2"
                        >
                          {/* IMAGE */}
                          <div className="relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover transition duration-700 hover:scale-110"
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
