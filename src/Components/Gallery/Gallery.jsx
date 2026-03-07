import React, { useEffect } from "react";
import mit from "../../assets/Events/mit.png";
import lasermaze from "../../assets/Events/lasermaze.png";
import wop from "../../assets/Events/wop.png";
import e1img1 from "../../assets/Events/event1/img1.jpeg";
import e1img2 from "../../assets/Events/event1/img2.jpeg";
import e1img3 from "../../assets/Events/event1/img3.jpeg";
import e1img4 from "../../assets/Events/event1/img4.jpeg";
import e1img5 from "../../assets/Events/event1/img5.jpeg";
import e1img6 from "../../assets/Events/event1/img6.jpeg";

import e2img1 from "../../assets/Events/event2/img1.jpeg";
import e2img2 from "../../assets/Events/event2/img2.jpeg";
import e2img3 from "../../assets/Events/event2/img3.jpeg";
import e2img4 from "../../assets/Events/event2/img4.jpeg";
import e2img5 from "../../assets/Events/event2/img5.jpeg";
import e2img6 from "../../assets/Events/event2/img6.jpeg";
import e2img7 from "../../assets/Events/event2/img7.jpeg";
import e2img8 from "../../assets/Events/event2/img8.jpeg";
import e2img9 from "../../assets/Events/event2/img9.jpeg";
import e2img10 from "../../assets/Events/event2/img10.jpeg";
import e2img11 from "../../assets/Events/event2/img11.jpeg";
import e2img12 from "../../assets/Events/event2/img12.jpeg";

const galleryData = [
  {
    id: 1,
    title: "Comsif Event",
    date: "March 2025",
    images: [e1img1, e1img2, e1img3, e1img4, e1img5, e1img6],
  },
  {
    id: 2,
    title: "Spark Trail ",
    date: "April 2025",
    images: [
      e2img1,
      e2img2,
      e2img3,
      e2img4,
      e2img5,
      e2img6,
      e2img7,
      e2img8,
      e2img9,
      e2img10,
      e2img11,
      e2img12,
    ],
  },
];

const eventsData = [
  {
    id: 1,
    title: "MIT Photonics Workshop",
    description:
      "Our members presenting research at the flagship IEEE Photonics Conference in Orlando.",
    imageUrl: mit,
    category: "events",
    date: "November 12, 2024",
  },
  {
    id: 2,
    title: "Laser Maze",
    description:
      "Students experimenting with cutting-edge laser technology in our research lab.",
    imageUrl: lasermaze,
    category: "research",
    date: "December 20, 2024",
  },
  {
    id: 3,
    title: "WOP",
    description:
      "Monthly meetup of our student chapter members discussing photonics applications.",
    imageUrl: wop,
    category: "members",
    date: "December 20 2024",
  },
];

const Gallery = () => {
  useEffect(() => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }, []);

  return (
    <div className="text-[#2D3748] font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
      {/* orange color line */}
      <div className="h-1 bg-[#FF7D32] mx-auto max-w-[120px]  mb-2"></div>
      {/*  GALLERY GRID  */}
      <div className="max-w-[1200px] mx-auto px-6 py-[10px]">
        {galleryData.map((event) => (
          <div key={event.id} className="mb-14">
            {/* Event Title */}
            <h2 className="text-2xl font-bold mb-6">
              {event.title} - {event.date}
            </h2>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {event.images.map((img, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-md bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl group"
                >
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={img}
                      alt={event.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#003B5C] via-[#003B5C]/80 to-transparent p-6 text-white">
                      <h3 className="text-[18px] font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-sm opacity-90 mt-1">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

        <h2 className="text-3xl text-center font-bold mb-6">
          Other Events
        </h2>
      <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden shadow-md bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl group"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#003B5C] via-[#003B5C]/80 to-transparent p-6 text-white">
                  <h3 className="text-[18px] font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90 mt-1">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  CUSTOM ANIMATION  */}
      <style>{`
        @keyframes laserMove {
          0% { left: -10%; }
          100% { left: 110%; }
        }

        .animate-laser {
          animation: laserMove 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
