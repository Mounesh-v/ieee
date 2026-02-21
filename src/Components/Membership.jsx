import React, { useEffect } from "react";

const Membership = () => {
  useEffect(() => {
    document.title = "Membership - IEEE Photonics Society";
  }, []);

  return (
    <div className="bg-[#F8F9FA] text-[#2D3748] font-sans">
      <section className="bg-[#14435f] text-white text-center py-[120px] px-5">
        <h1 className="text-[44px] font-bold mb-5 leading-tight">
          Join Our Photonics Community
        </h1>
        <p className="text-[22px] max-w-[900px] mx-auto opacity-90">
          Become part of the IEEE Photonics Society at BMSIT&M and advance your
          journey in light-based technologies
        </p>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-[1000px] mx-auto py-[60px] px-5 space-y-[60px]">
        {/* WHY JOIN */}
        <section className="bg-white rounded-lg p-10 shadow-sm border-t-4 border-[#FF7D32]">
          <h2 className="text-[32px] text-[#003B5C] font-semibold mb-6 relative">
            Why Join?
            <span className="block w-[60px] h-[3px] bg-[#FF7D32] mt-3 rounded"></span>
          </h2>
          <p className="text-[#4A5568] leading-relaxed text-[19px]">
            Join the <strong>IEEE Photonics Club at BMSIT</strong> and become
            part of a dynamic community passionate about light-based
            technologies. As a member, you'll explore the world of photonics
            through workshops, hands-on projects, competitions, and exclusive
            events — all designed to enhance your skills and broaden your
            exposure.
          </p>
        </section>

        {/* MEMBERSHIP DETAILS */}
        <section className="bg-white rounded-lg p-10 shadow-sm border-t-4 border-[#FF7D32]">
          <h2 className="text-[32px] text-[#003B5C] font-semibold mb-6">
            Membership Details
            <span className="block w-[60px] h-[3px] bg-[#FF7D32] mt-3 rounded"></span>
          </h2>

          <ul className="space-y-4 pl-5 text-[#4A5568]">
            <li>
              <strong>Eligibility:</strong> Open to all BMSIT students (across
              all branches and semesters)
            </li>
            <li>
              <strong>Duration:</strong> Membership is valid for one academic
              year
            </li>
            <li>
              <strong>Fees:</strong>{" "}
              <a
                href="https://www.ieee.org/membership/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00629B] hover:text-[#003B5C]"
              >
                IEEE Photonics Membership Page
              </a>
            </li>
          </ul>
        </section>

        {/* MEMBER BENEFITS */}
        <section className="bg-white rounded-lg p-10 shadow-sm border-t-4 border-[#FF7D32]">
          <h2 className="text-[32px] text-[#003B5C] font-semibold mb-6">
            Member Benefits
            <span className="block w-[60px] h-[3px] bg-[#FF7D32] mt-3 rounded"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "🧠 Interactive Workshops",
                desc: "Participate in technical sessions and hands-on workshops to enhance your photonics knowledge.",
              },
              {
                title: "📜 Official Certificate",
                desc: "Receive a certificate of membership recognizing your participation in the society.",
              },
              {
                title: "🛠️ Project Opportunities",
                desc: "Work on real-world photonics projects to apply your learning practically.",
              },
              {
                title: "🌐 Guest Lectures",
                desc: "Access to exclusive webinars and talks by industry experts and researchers.",
              },
              {
                title: "🌟 Competitions",
                desc: "Participate in member-only competitions and showcase your skills.",
              },
              {
                title: "🤝 Networking",
                desc: "Connect with like-minded peers and professionals in the photonics field.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-[#E6F2FF] p-8 rounded-lg border-l-4 border-[#FF7D32] hover:-translate-y-1 transition"
              >
                <h3 className="text-[20px] text-[#003B5C] mb-3 font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-[#4A5568]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO JOIN */}
        <section className="bg-white rounded-lg p-10 shadow-sm border-t-4 border-[#FF7D32]">
          <h2 className="text-[32px] text-[#003B5C] font-semibold mb-6">
            How to Join
            <span className="block w-[60px] h-[3px] bg-[#FF7D32] mt-3 rounded"></span>
          </h2>

          <p className="text-[#4A5568] mb-6">
            Ready to begin your photonics journey? Here's how you can join:
          </p>

          <ol className="space-y-6">
            {[
              "Visit the IEEE Student Membership Page",
              "Navigate to the Student Membership section",
              "Search and select Photonics Society under technical societies",
              "Complete the registration process and payment",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FF7D32] text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-[#4A5568]">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CONTACT */}
        <section className="bg-white rounded-lg p-10 shadow-sm border-t-4 border-[#FF7D32]">
          <h2 className="text-[32px] text-[#003B5C] font-semibold mb-6">
            Need Help?
            <span className="block w-[60px] h-[3px] bg-[#FF7D32] mt-3 rounded"></span>
          </h2>

          <p className="text-[#4A5568] mb-8">
            Have questions or need assistance? We're here to help!
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px] bg-[#E6F2FF] p-6 rounded-lg flex items-center gap-4">
              <a
                href="mailto:ieeephotonicsbmsit@gmail.com"
                className="flex-1 min-w-[250px] bg-[#E6F2FF] p-6 rounded-lg flex items-center gap-4 hover:shadow-md transition"
              >
                <div className="text-2xl text-[#FF7D32]">📧</div>
                <div>
                  <h3 className="text-[#003B5C] font-semibold">Email Us</h3>
                  <p className="text-[#00629B] font-medium">
                    ieeephotonicsbmsit@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className="flex-1 min-w-[250px] bg-[#E6F2FF] p-6 rounded-lg flex items-center gap-4">
              <a
                href="tel:+916363200613"
                className="flex-1 min-w-[250px] bg-[#E6F2FF] p-6 rounded-lg flex items-center gap-4 hover:shadow-md transition"
              >
                <div className="text-2xl text-[#FF7D32]">📞</div>
                <div>
                  <h3 className="text-[#003B5C] font-semibold">Call Us</h3>
                  <p className="text-[#00629B] font-medium">
                    Yashvant M (Chair) | 6363200613
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Membership;
