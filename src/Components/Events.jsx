import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Gallery from "../Components/Gallery/Gallery";

const Events = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);

  return (
    <div className="bg-[#F8F9FA] text-[#2D3748] font-sans">
      <main className="px-4 sm:px-6 py-10">
        {/* Intro */}
        <section className="max-w-6xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#003B5C] mb-4">
            Welcome to the IEEE Photonics Society
          </h2>
          <p className="text-[#4A5568] text-sm sm:text-base">
            The IEEE Photonics Society at BMSIT&M unites students passionate
            about photonics and optical technologies. We foster innovation,
            hands-on learning, and collaboration through technical events.
          </p>
        </section>

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

            <div className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 mb-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                Photonics TechTalk 2025
              </h3>
              <p>
                <strong>Date:</strong> May 12, 2025
              </p>
              <p>A seminar on photonic computing.</p>
            </div>
          </section>
        )}

        {/* Past */}
        {!showUpcoming && (
          <section className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md mb-10">
            <h2 className="text-2xl font-bold text-[#003B5C] mb-6">
              Past Events
            </h2>

            <div className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 rounded-lg">
              <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                Photonics Hackathon
              </h3>
              <p>
                <strong>Date:</strong> February 10, 2025
              </p>
              <p>24-hour student hackathon.</p>
            </div>
          </section>
        )}

        

      </main>
        <Gallery />
    </div>
  );
};

export default Events;
