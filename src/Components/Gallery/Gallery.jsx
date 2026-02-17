import React, { useEffect } from "react";

const galleryData = [
  {
    id: 1,
    title: "Annual Photonics Conference 2023",
    description:
      "Our members presenting research at the flagship IEEE Photonics Conference in Orlando.",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    category: "events",
    date: "November 12, 2023",
  },
  {
    id: 2,
    title: "Laser Lab Demonstration",
    description:
      "Students experimenting with cutting-edge laser technology in our research lab.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    category: "research",
    date: "October 5, 2023",
  },
  {
    id: 3,
    title: "Student Chapter Meetup",
    description:
      "Monthly meetup of our student chapter members discussing photonics applications.",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    category: "members",
    date: "September 18, 2023",
  },
  {
    id: 4,
    title: "Best Paper Award",
    description:
      "Our team receiving the Best Paper Award for research in quantum photonics.",
    imageUrl:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=800&q=80",
    category: "awards",
    date: "August 22, 2023",
  },
  {
    id: 5,
    title: "Optical Fiber Workshop",
    description:
      "Hands-on workshop on optical fiber technology for undergraduate students.",
    imageUrl:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    category: "events",
    date: "July 15, 2023",
  },
  {
    id: 6,
    title: "Photonics Summer Camp",
    description:
      "High school students learning about photonics through interactive experiments.",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    category: "events",
    date: "June 30, 2023",
  },
];

const Gallery = () => {
  useEffect(() => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  }, []);

  return (
    <div className="bg-[#F8F9FA] text-[#2D3748] font-sans min-h-screen">

      {/*  HERO SECTION  */}
      <section className="relative bg-[#003B5C] text-white py-[140px] overflow-hidden text-center">

        {/* Moving Laser Line */}
        <div className="absolute top-0 left-[-10%] h-full w-[4px] bg-gradient-to-b from-transparent via-[#FF7D32] to-transparent blur-sm shadow-[0_0_20px_#FF7D32] animate-laser"></div>

        <h2 className="text-[48px] font-bold drop-shadow-md">
          Photonics in Focus
        </h2>
        <p className="mt-6 text-[20px] max-w-[800px] mx-auto opacity-90">
          Explore our collection of photonics research, events, and achievements through images.
        </p>
      </section>

      {/*  GALLERY GRID  */}
      <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {galleryData.map((item) => (
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
                  <h3 className="text-[18px] font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 mt-1">
                    {item.date}
                  </p>
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
