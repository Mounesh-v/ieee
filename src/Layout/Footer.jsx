import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#003B5C] text-white pt-[60px] pb-[20px]">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-[#FF7D32] to-[#00629B]" />

      <div className="max-w-[1200px] mx-auto px-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px]">
        
        {/* ABOUT */}
        <div>
          <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
            About Us
            <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50" />
          </h3>

          <ul className="space-y-[18px]">
            <li>
              <a href="/about" className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]">Our Mission</a>
            </li>
            <li>
              <a href="/execome" className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]">Leadership</a>
            </li>
            <li>
              <a href="/gallery" className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]">Chapters</a>
            </li>
          </ul>
        </div>

        {/* MEMBERSHIP */}
        <div>
          <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
            Membership
            <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50" />
          </h3>

          <ul className="space-y-[18px]">
            <li>
              <a href="/membership" className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]">Join Now</a>
            </li>
            <li>
              <a href="/membership" className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]">Benefits</a>
            </li>
            <li>
              <a
                href="https://www.surveymonkey.com/r/IEEE-Photonics-Get-Involved"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]"
              >
                Volunteer
              </a>
            </li>
          </ul>
        </div>

        {/* PUBLICATIONS */}
        <div>
          <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
            Publications
            <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50" />
          </h3>

          <ul className="space-y-[18px]">
            <li>
              <a
                href="https://ieeephotonics.org/publications/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]"
              >
                Journals
              </a>
            </li>
            <li>
              <a
                href="https://ieeephotonics.org/publications/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]"
              >
                Magazines
              </a>
            </li>
            <li>
              <a
                href="https://ieeephotonics.org/society-newsroom/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]"
              >
                Newsletters
              </a>
            </li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
            Connect
            <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50" />
          </h3>

          <ul className="space-y-[18px]">
            <li>
              <a
                href="mailto:ieeephotonicsbmsit@gmail.com"
                className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ieee.photonics_bmsit/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]"
              >
                Social Media
              </a>
            </li>
            <li>
              <a
                href="https://ieeephotonics.org/"
                target="_blank"
                rel="noreferrer"
                className="text-white text-lg font-medium transition-all duration-300 inline-block hover:text-[#FF7D32] hover:translate-x-[6px]"
              >
                IEEE.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-[60px] pt-[20px] border-t border-white/10 text-white/70 text-[14px]">
        © {year} IEEE Photonics Society. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;