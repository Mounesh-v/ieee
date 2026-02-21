import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-sm py-[22px] sticky top-0 z-[100] border-b-[3px] border-orange-500 relative">
        <div className="relative flex justify-between items-center max-w-[1600px] mx-auto px-[20px]">
          {/* Logo Section */}
          <div className="flex items-center gap-[15px] group cursor-pointer">
            <img
              src={logo}
              alt="IEEE Photonics Society Logo"
              className="h-[60px] transition-all duration-300 group-hover:scale-105"
            />

            <div className="hidden sm:block">
              <h1 className="text-[24px] text-[#003B5C] font-bold tracking-[-0.5px]">
                IEEE Photonics BMSIT&M
              </h1>

              <p className="text-[14px] text-[#4A5568] font-medium">
                Advancing the science and technology of light
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className={`
    ${isMenuOpen ? "active" : ""} 
    md:block
    absolute md:static top-full left-0
    w-full md:w-auto
    bg-white md:bg-transparent
    shadow-xl md:shadow-none
    p-6 md:p-0
    z-50
  `}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-[25px]">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Execom", path: "/execome" },
                { name: "Events", path: "/events" },
                { name: "Our Projects", path: "/projects" },
                { name: "Membership", path: "/membership" },
                { name: "Game", path: "/game" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="
                        relative
                        text-[#003B5C]
                        font-semibold
                        text-[19px]
                        py-[8px]
                        block
                        after:content-['']
                        after:absolute
                        after:left-0
                        after:bottom-0
                        after:h-[2px]
                        after:w-0
                        after:bg-[#FF7D32]
                        after:transition-all
                        hover:after:w-full
                      "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl text-[#003B5C] focus:outline-none"
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
