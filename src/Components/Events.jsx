import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Gallery from "../Components/Gallery/Gallery";

const Events = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);

  const upcomingEvents = [
    {
      id: 1,
      title: "Poster Designing Competition",
      date: "May 16 (International Day of Light), 2026",
      description:
        "A creative design competition themed around light and photonics to encourage technical awareness through visuals.",
    },
    {
      id: 2,
      title: "Spark Trail 2.0 ",
      date: "April 2026",
      description:
        "A photonics-based treasure hunt event focused on optics concepts and interactive problem-solving.",
    },
    {
      id: 3,
      title: "Photonics Hackathon",
      date: "August, 2025",
      description:
        "A hands-on innovation event where participants develop solutions related to optics, electronics, and communication systems.",
    },
    {
      id: 4,
      title: "Photonics Workshop ",
      date: "November, 2025",
      description:
        "A technical workshop aimed at building practical knowledge in photonics concepts and applications.",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "IEEE COMPSIF",
      date: "21 March 2025",
      description:
        "Showcased mini projects, drone demonstration, and interactive light-based activities to promote Photonics Society.",
    },
    {
      id: 2,
      title: "Spark Trail",
      date: "4 April 2025",
      description:
        "A two-round photonics treasure hunt focusing on optics concepts and real-world problem-solving.",
    },
    {
      id: 3,
      title: "IEEE Winter of Projects (WOP)",
      date: " 29 November 2025",
      description:
        "A team-based project initiative where students built practical hardware and software solutions.",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] text-[#2D3748] font-sans">
      {/*  HERO SECTION  */}
      <section className="relative bg-[#003B5C] text-white py-32 text-center -mt-10">
        {/* Moving Laser Line */}
        <div className="absolute top-0 left-[-10%] h-full w-[4px] bg-gradient-to-b from-transparent via-[#FF7D32] to-transparent blur-sm shadow-[0_0_20px_#FF7D32] animate-laser"></div>

        <h2 className="text-[32px] md:text-[48px] font-bold drop-shadow-md">
          Photonics in Focus
        </h2>
        <p className="mt-6 text-[20px] max-w-[800px] mx-auto opacity-90">
          Explore our collection of photonics research, events, and achievements
          through images.
        </p>
      </section>
      <main className="px-4 sm:px-6 py-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow-lg rounded-full p-2 flex gap-2">
            <button
              onClick={() => setShowUpcoming(true)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                showUpcoming
                  ? "bg-[#003B5C] text-white"
                  : "text-[#003B5C] hover:bg-gray-100"
              }`}
            >
              Upcoming
            </button>

            <button
              onClick={() => setShowUpcoming(false)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                !showUpcoming
                  ? "bg-[#003B5C] text-white"
                  : "text-[#003B5C] hover:bg-gray-100"
              }`}
            >
              Past
            </button>
          </div>
        </div>

        {/* Upcoming */}
        {showUpcoming && (
          <section className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#003B5C] mb-6">
              Upcoming Events
            </h2>

            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 mb-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                  {event.title}
                </h3>

                <p>
                  <strong>Date:</strong> {event.date}
                </p>

                <p>{event.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Past */}
        {!showUpcoming && (
          <section className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md mb-10">
            <h2 className="text-2xl font-bold text-[#003B5C] mb-6">
              Past Events
            </h2>

            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 mb-6 rounded-lg"
              >
                <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                  {event.title}
                </h3>

                <p>
                  <strong>Date:</strong> {event.date}
                </p>

                <p>{event.description}</p>
              </div>
            ))}
          </section>
        )}
      </main>
      <Gallery />
    </div>
  );
};

export default Events;
