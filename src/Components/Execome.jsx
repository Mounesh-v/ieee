import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import yashwanth from "../assets/_EXECOM/5.png";
import Prajna from "../assets/_EXECOM/6.png";
import avinash from "../assets/_EXECOM/2.png";
import aryan from "../assets/_EXECOM/4.png";
import sumit from "../assets/_EXECOM/1.png";
import kalanthika from "../assets/_EXECOM/7.png";
import mounesh from "../assets/_EXECOM/3.jpeg";
import anush from "../assets/_EXECOM/15.jpeg";

const Execome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const facultyMembers = [
    {
      name: "Dr. Asha",
      position: "Co-Advisor",
      department: "ECE",
      photo: "/a.png",
      email: "#",
      linkedin: "#",
      website: "#",
    },
  ];

  const studentMembers = [
    {
      name: "Yashvanth M",
      position: "Chairperson",
      department: "ECE",
      photo: yashwanth,
      email: "#",
      linkedin: "https://www.linkedin.com/in/amit-patil-480773155",
    },
    {
      name: "ANSHU SINGH",
      position: "Vice Chair",
      department: "CSE",
      photo: anush,
      email: "anshusingh63761@gmail.com ",
      linkedin:
        "https://www.linkedin.com/in/anshu-singh-a11994330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Prajna Saha",
      position: "Secretary",
      department: "ECE",
      photo: Prajna,
      email: "#",
      linkedin: "https://www.linkedin.com/in/varsha-s-kundur",
    },
    {
      name: "K.Avinash",
      position: "Joint Secretary",
      department: "AIML",
      photo: avinash,
      email: "#",
      linkedin: "https://www.linkedin.com/in/amit-patil-480773155",
    },
    {
      name: "Aryan Sujay",
      position: "R&D Head",
      department: "CSE",
      photo: aryan,
      email: "#",
      linkedin: "https://www.linkedin.com/in/abhishek-v-v-09012b300",
    },
    {
      name: "SUMIT HIRAVE",
      position: "Treasurer",
      department: "ECE",
      photo: sumit,
      email: "#",
      linkedin: "https://www.linkedin.com/in/varsha-s-kundur",
    },
    {
      name: "S Kalanthika",
      position: "Project Head",
      department: "ECE",
      photo: kalanthika,
      email: "#",
      linkedin: "https://www.linkedin.com/in/varsha-s-kundur",
    },
    {
      name: "MOUNESH V",
      position: "Web Master",
      department: "CSE",
      photo: mounesh,
      email: "#",
      linkedin: "https://www.linkedin.com/in/varsha-s-kundur",
    },
  ];

  const MemberCard = ({ member, isFaculty }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden max-w-sm mx-auto">
        {/* Image Section */}
        <div className="w-full aspect-[3/4] bg-gray-200 overflow-hidden">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Content Section */}
        <div className="bg-[#F3F4F6] text-center px-6 py-8">
          <h3 className="text-2xl font-bold text-[#003B5C] mb-2">
            {member.name}
          </h3>

          <p className="text-lg font-semibold text-[#FF7D32] mb-2">
            {member.position}
          </p>

          <p className="text-[#4A5568] mb-6">{member.department}</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-2xl text-[#00629B]">
            <a href={`mailto:${member.email}`}>
              <FaEnvelope className="hover:text-[#003B5C] transition" />
            </a>

            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-[#003B5C] transition" />
            </a>

            {isFaculty && (
              <a href={member.website}>
                <FaGlobe className="hover:text-[#003B5C] transition" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#F8F9FA] font-sans text-[#2D3748]">
      {/* Team Section */}
      <section className="py-16 px-6 text-center">
        <div className="flex flex-col mt-9">
          <h2 className="text-4xl font-bold text-[#003B5C] mb-4 relative inline-block">
            Our Executive Committee
            <span className="bg-[#FF7D32] block w-24 h-1 mx-auto mt-5 rounded-full"></span>
          </h2>
          <p className="text-[#4A5568] max-w-4xl mx-auto mb-14 text-xl">
            Meet the dedicated team of faculty advisors and student members who
            drive the IEEE Photonics Society forward.
          </p>
        </div>

        {/* Faculty */}
        <div className="mb-10">
          <h3 className="text-3xl flex font-bold text-[#003B5C]">
            Faculty Advisors
          </h3>

          {/* Accent + Divider Line */}
          <div className="relative mt-4">
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="absolute top-0 left-0 w-24 h-[2px] bg-[#FF7D32]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
          {facultyMembers.map((member, i) => (
            <MemberCard key={i} member={member} isFaculty={true} />
          ))}
        </div>

        {/* Students */}
        <h3 className="text-3xl flex font-bold text-[#003B5C]">
          Student Committee
        </h3>
        {/* Accent + Divider Line */}
        <div className="relative mt-4">
          <div className="w-full h-[2px] bg-gray-300"></div>
          <div className="absolute top-0 left-0 w-24 h-[2px] bg-[#FF7D32]"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {studentMembers.map((member, i) => (
            <MemberCard key={i} member={member} isFaculty={false} />
          ))}
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto bg-[#F3F4F6] rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="flex-1 p-12">
            <h2 className="text-4xl font-bold text-[#003B5C] mb-6">
              Join Our Chapter
            </h2>

            <p className="text-[#4A5568] mb-8 text-lg">
              Become part of our vibrant photonics community and access
              exclusive benefits:
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-center gap-4 text-[#2D3748] text-lg">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF7D32] text-white text-sm">
                  <IoMdCheckmark />
                </span>
                Technical workshops & seminars
              </li>

              <li className="flex items-center gap-4 text-[#2D3748] text-lg">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF7D32] text-white text-sm">
                  <IoMdCheckmark />
                </span>
                Networking opportunities
              </li>

              <li className="flex items-center gap-4 text-[#2D3748] text-lg">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF7D32] text-white text-sm">
                  <IoMdCheckmark />
                </span>
                Research collaborations
              </li>

              <li className="flex items-center gap-4 text-[#2D3748] text-lg">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF7D32] text-white text-sm">
                  <IoMdCheckmark />
                </span>
                Professional development
              </li>
            </ul>

            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-[linear-gradient(135deg,#F47A33_0%,#A8765C_50%,#1F6B96_100%)] 
                   shadow-md hover:shadow-xl transition-all duration-300"
            >
              Join Now →
            </a>
          </div>

          {/* Right Gradient Panel */}
          <div
            className="hidden md:block w-1/3 
  bg-[linear-gradient(135deg,#F47A33_0%,#A8765C_50%,#1F6B96_100%)]"
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Execome;
