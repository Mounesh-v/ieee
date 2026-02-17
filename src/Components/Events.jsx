import React, {  useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Events = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const events = ["2025-05-12", "2025-06-07", "2025-03-15", "2025-02-10"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const formatDate = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  return (
    <div className="bg-[#F8F9FA] text-[#2D3748] font-sans">
      <main className="px-5 py-10">
        {/* Intro Section */}
        <section className="max-w-6xl mx-auto bg-white p-10 mt-10  rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-bold text-[#003B5C] mb-4">
            Welcome to the IEEE Photonics Society
          </h2>
          <p className="text-[#4A5568] text-[16px] max-w-8xl">
            The IEEE Photonics Society at BMSIT&M unites students passionate
            about photonics and optical technologies. We foster innovation,
            hands-on learning, and collaboration through a variety of technical
            events and activities.
          </p>
        </section>

        {/* Filter Buttons */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowUpcoming(true)}
            className="mx-2 px-6 py-3 bg-[#007bff] text-white rounded-lg shadow-md hover:bg-[#0056b3] transition"
          >
            Show Upcoming
          </button>

          <button
            onClick={() => setShowUpcoming(false)}
            className="mx-2 px-6 py-3 bg-[#007bff] text-white rounded-lg shadow-md hover:bg-[#0056b3] transition"
          >
            Show Past
          </button>
        </div>

        {/* Upcoming Events */}
        {showUpcoming && (
          <section className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md mb-10">
            <h2 className="text-3xl font-bold text-[#003B5C] mb-6">
              Upcoming Events
            </h2>

            <div className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 mb-6 rounded-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                Photonics TechTalk 2025
              </h3>
              <p className="mb-1">
                <strong>Date:</strong> May 12, 2025
              </p>
              <p className="text-[18px]">
                A seminar on photonic computing featuring guest speakers and
                live demos.
              </p>
            </div>

            <div className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 rounded-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                Laser Experiments Expo
              </h3>
              <p className="mb-1">
                <strong>Date:</strong> June 7, 2025
              </p>
              <p className="text-[18px]">
                Live demonstrations and interactive experiments with lasers and
                optics.
              </p>
            </div>
          </section>
        )}

        {/* Past Events */}
        {!showUpcoming && (
          <section className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md mb-10">
            <h2 className="text-2xl font-bold text-[#003B5C] mb-6">
              Past Events
            </h2>

            <div className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 mb-6 rounded-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                Intro to Photonics
              </h3>
              <p className="mb-1">
                <strong>Date:</strong> March 15, 2025
              </p>
              <p className="text-[18px]">
                Introduction to the world of photonics and light-based
                technologies.
              </p>
            </div>

            <div className="border-l-4 border-[#0077cc] bg-[#f9f9f9] p-5 rounded-lg hover:-translate-y-1 transition">
              <h3 className="text-lg font-bold text-[#003B5C] mb-2">
                Photonics Hackathon
              </h3>
              <p className="mb-1">
                <strong>Date:</strong> February 10, 2025
              </p>
              <p className="text-[18px]">
                24-hour student hackathon focused on creative optical sensor
                solutions.
              </p>
            </div>
          </section>
        )}

        {/* Calendar Section UI (Styled Same As Original) */}
        <section className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl text-center font-bold text-[#003B5C] mb-6">
            Event Calendar
          </h2>

          <div className="bg-white border rounded-2xl p-9 shadow-md">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-6 mb-6">
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
                className="w-11 h-11 flex items-center justify-center bg-[#F9FAFB] border rounded-xl hover:bg-[#F3F4F6]"
              >
                <FaChevronLeft />
              </button>

              <h3 className="text-xl font-bold text-[#2D3748]">
                {currentDate.toLocaleString("default", {
                  month: "long",
                })}{" "}
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
                className="w-11 h-11 flex items-center justify-center bg-[#F9FAFB] border rounded-xl hover:bg-[#F3F4F6]"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-[#6B7280] mb-2">
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
            <div className="grid grid-cols-7 gap-2">
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

                if (index < firstDay) {
                  return <div key={index}></div>;
                }

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

                const hasEvent = events.includes(dateString);
                const isSelected = selectedDate === dateString;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedDate(dateString)}
                    className={`
              aspect-square flex items-center justify-center rounded-xl cursor-pointer transition
              ${isToday ? "bg-[#DBEAFE] border border-[#3B82F6]" : "bg-[#F9FAFB]"}
              ${isSelected ? "bg-[#3B82F6] text-white" : ""}
              ${hasEvent ? "ring-2 ring-[#FF7D32]" : ""}
              hover:bg-[#F3F4F6]
            `}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Events;
