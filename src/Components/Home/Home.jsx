import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./home_styles.css";
// import logo from "../../assets/logo.png";
import heroImage from "../../public/image2.png";

const Home = () => {
  
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    setNewsData([
      {
        title: "Call for Papers: Photonics Conference 2023",
        date: "June 15, 2023",
        content:
          "Submit your research to our flagship conference. Deadline approaching soon.",
        link: "#",
      },
      {
        title: "New Issue of Photonics Journal Published",
        date: "June 1, 2023",
        content:
          "The latest research in quantum photonics and optical communications now available.",
        link: "#",
      },
      {
        title: "Student Chapter Grants Available",
        date: "May 25, 2023",
        content:
          "Funding opportunities for student chapters to organize photonics-related activities.",
        link: "#",
      },
    ]);
  }, []);

  

  return (
    <>
      

      {/*  HERO  */}
      <section
        className="
    relative
    bg-cover bg-center bg-no-repeat
    text-white text-center
    px-[20px]
    py-[120px] md:py-[180px]
    overflow-hidden
    animate-[fadeIn_0.6s_ease-out_forwards]
  "
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h2
          className="
      text-[32px] md:text-[42px]
      font-bold
      leading-[1.2]
      mb-[25px]
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
    "
        >
          Advancing the Science and Technology of Light
        </h2>

        <p
          className="
      text-[18px] md:text-[20px]
      max-w-[800px]
      mx-auto
      mb-[35px]
      drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
    "
        >
          The IEEE Photonics Society focuses on research, development and
          application of photonics technologies.
        </p>

        <button
          className="
      inline-block
      bg-[#FF7D32]
      text-white
      px-[35px]
      py-[15px]
      rounded-full
      font-semibold
      text-[18px]
      shadow-md
      border-2 border-transparent
      transition-all duration-300
      hover:bg-transparent
      hover:border-white
      hover:-translate-y-[3px]
      hover:shadow-lg
    "
        >
          Join Our Community
        </button>
      </section>

      {/*  FEATURED PROGRAMS  */}
      <div className="max-w-[1200px] mx-auto px-[20px] py-[60px]">
        <h2
          className="
      relative
      text-center
      mb-[50px]
      text-[#003B5C]
      text-[28px] md:text-[32px]
      font-bold
    "
        >
          Featured Programs
          <span
            className="
        block
        w-[80px]
        h-[4px]
        bg-[#FF7D32]
        mx-auto
        mt-[15px]
        rounded-[2px]
      "
          ></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[50px]">
          {[
            {
              title: "Upcoming Conferences",
              img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop",
              text: "Discover our premier photonics conferences and events worldwide.",
            },
            {
              title: "Leading Publications",
              img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
              text: "Access high-impact journals and magazines in photonics and optics.",
            },
            {
              title: "Educational Resources",
              img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
              text: "Explore webinars, tutorials, and learning materials for all levels.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group bg-white border border-[rgba(0,59,92,0.1)] rounded-[8px] overflow-hidden transition-all duration-300 shadow-sm h-[400px] hover:-translate-y-[10px] hover:shadow-lg hover:border-[rgba(0,98,155,0.2)]"
            >
              <div
                className="
    h-[180px]
    bg-cover
    bg-center
    transition-all duration-300
    group-hover:opacity-90
  "
                style={{
                  backgroundImage: `url(${card.img})`,
                }}
              ></div>

              <div className="p-[25px]">
                <h3 className="mb-[15px] text-[#003B5C] text-[20px] font-semibold">
                  {card.title}
                </h3>

                <p className="mb-[20px] text-[#4A5568] text-[16px]">
                  {card.text}
                </p>

                <span className="inline-flex items-center gap-[5px] text-[#00629B] font-semibold cursor-pointer group/link">
                  Learn More
                  <span className="transition-all duration-300 group-hover/link:translate-x-[3px]">
                    →
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  NEWS SECTION  */}
      <section className="relative bg-[#E6F2FF] py-[80px]">
        <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-[#FF7D32] to-[#00629B]"></div>

        <div className="max-w-[1200px] mx-auto px-[20px]">
          <h2
            className="
        relative
        text-center
        mb-[50px]
        text-[#003B5C]
        text-[28px] md:text-[32px]
        font-bold
      "
          >
            Latest News & Announcements
            <span
              className="
          block
          w-[80px]
          h-[4px]
          bg-[#FF7D32]
          mx-auto
          mt-[15px]
          rounded-[2px]
        "
            ></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="
            bg-white
            p-[25px]
            rounded-[8px]
            shadow-sm
            transition-all duration-300
            border-l-[4px] border-l-transparent
            hover:-translate-y-[5px]
            hover:shadow-md
            hover:border-l-[#FF7D32]
            animate-[fadeIn_0.6s_ease-out_forwards]
          "
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <h3 className="mb-[15px] text-[#003B5C] text-[18px] font-semibold">
                  {news.title}
                </h3>

                <span className="block mb-[15px] text-[#FF7D32] text-[14px] font-medium">
                  {news.date}
                </span>

                <p className="text-[#4A5568] mb-[15px]">{news.content}</p>

                <a
                  href={news.link}
                  className="text-[#00629B] font-semibold hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  FOOTER  */}
      
    </>
  );
};

export default Home;
