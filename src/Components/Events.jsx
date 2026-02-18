import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Events = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const events = {
    "2026-02-21": [{ title: "AGM Meet" }],
  };

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const formatDate = (year, month, day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

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
        <div className="text-center mb-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setShowUpcoming(true)}
            className="px-6 py-3 bg-[#007bff] text-white rounded-lg shadow-md hover:bg-[#0056b3] transition"
          >
            Show Upcoming
          </button>

          <button
            onClick={() => setShowUpcoming(false)}
            className="px-6 py-3 bg-[#007bff] text-white rounded-lg shadow-md hover:bg-[#0056b3] transition"
          >
            Show Past
          </button>
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

        {/* Calendar */}
        <section className="max-w-6xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md">
          <h2 className="text-2xl sm:text-3xl text-center font-bold text-[#003B5C] mb-6">
            Event Calendar
          </h2>

          <div className="border rounded-2xl p-4 sm:p-6 md:p-9 shadow-md">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth() - 1,
                      1,
                    ),
                  )
                }
                className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-[#F9FAFB] border rounded-xl hover:bg-[#F3F4F6]"
              >
                <FaChevronLeft />
              </button>

              <h3 className="text-base sm:text-lg md:text-xl font-bold">
                {currentDate.toLocaleString("default", { month: "long" })}{" "}
                {currentDate.getFullYear()}
              </h3>

              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth() + 1,
                      1,
                    ),
                  )
                }
                className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-[#F9FAFB] border rounded-xl hover:bg-[#F3F4F6]"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="bg-[#F3F4F6] py-2 rounded-md font-semibold"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {Array.from({
                length:
                  getFirstDayOfMonth(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                  ) +
                  getDaysInMonth(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                  ),
              }).map((_, index) => {
                const firstDay = getFirstDayOfMonth(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                );

                if (index < firstDay) return <div key={index}></div>;

                const day = index - firstDay + 1;
                const dateString = formatDate(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day,
                );

                const today = new Date();
                const isToday =
                  today.getDate() === day &&
                  today.getMonth() === currentDate.getMonth() &&
                  today.getFullYear() === currentDate.getFullYear();

                const hasEvent = events[dateString];
                const isSelected = selectedDate === dateString;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedDate(dateString)}
                    className={`
                      aspect-square relative flex items-center justify-center
                      text-xs sm:text-sm md:text-base
                      rounded-lg cursor-pointer transition
                      ${isToday ? "bg-[#DBEAFE] border border-[#3B82F6]" : "bg-[#F9FAFB]"}
                      ${isSelected ? "bg-[#3B82F6] text-white" : ""}
                      ${hasEvent ? "ring-2 ring-[#696665]" : ""}
                      hover:ring-[#767372]
                    `}
                  >
                    {day}

                    {/* Event Dot */}
                    {hasEvent && (
                      <span className="absolute bottom-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF7D32] rounded-full"></span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected Date Events */}
            {selectedDate && events[selectedDate] && (
              <div className="mt-6 p-4 bg-[#F9FAFB] rounded-xl border">
                <h4 className="font-semibold mb-3">Events on {selectedDate}</h4>

                {events[selectedDate].map((event, i) => (
                  <div key={i} className="mb-3">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Events;
