import React,{useState,useEffect} from "react";

const Footer = () => {
    const [year, setYear] = useState("");

    useEffect(() => {
          setYear(new Date().getFullYear());

    }, [])
    

  return (
    <>
      <footer className="relative bg-[#003B5C] text-white pt-[60px] pb-[20px]">
        <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-[#FF7D32] to-[#00629B]"></div>

        <div className="max-w-[1200px] mx-auto px-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px]">
          {/* COLUMN 1 */}
          <div>
            <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
              About Us
              <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50"></span>
            </h3>

            <ul className="space-y-[18px]">
              {["Our Mission", "Leadership", "Chapters", "Awards"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white/80 text-[18px] transition-all duration-300 inline-block hover:text-white hover:translate-x-[6px]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
              Membership
              <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50"></span>
            </h3>

            <ul className="space-y-[18px]">
              {["Join Now", "Benefits", "Student Resources", "Volunteer"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white/80 text-[18px] transition-all duration-300 inline-block hover:text-white hover:translate-x-[6px]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
              Publications
              <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50"></span>
            </h3>

            <ul className="space-y-[18px]">
              {["Journals", "Magazines", "Newsletters", "Standards"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white/80 text-[18px] transition-all duration-300 inline-block hover:text-white hover:translate-x-[6px]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-[#FF7D32] mb-[30px] text-[20px] font-semibold pb-[10px] relative">
              Connect
              <span className="absolute bottom-0 left-0 w-[50px] h-[3px] bg-[#FF7D32]/50"></span>
            </h3>

            <ul className="space-y-[18px]">
              {["Contact Us", "Social Media", "Career Center", "IEEE.org"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white/80 text-[18px] transition-all duration-300 inline-block hover:text-white hover:translate-x-[6px]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="text-center mt-[60px] pt-[20px] border-t border-white/10 text-white/70 text-[14px]">
          © {year} IEEE Photonics Society. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
