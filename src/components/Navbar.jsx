import React, { useState } from "react";
import { cashAppLogo, eyeButton } from "../Assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai"

const navLinks = [
  {
    id: 1,
    link: "sign up",
  },
  {
    id: 2,
    link: "Legal",
  },
  {
    id: 3,
    link: "Licenses",
  },
  {
    id: 4,
    link: "Security",
  },
  {
    id: 5,
    link: "Careers",
  },
  {
    id: 6,
    link: "Press",
  },
  {
    id: 7,
    link: "Support",
  },
  {
    id: 8,
    link: "Status",
  },
  {
    id: 9,
    link: "Codeblog",
  },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-black bg-opacity-90 flex items-center justify-between px-8 py-4 text-white bg-none fixed top-0 left-0 w-full z-[999]">
      <img src={cashAppLogo} alt="Cash App Logo" />
      <ul className="hidden lg:flex items-center justify-center list-none ">
        {navLinks.map((navlink) => {
          return (
            <a href="/">
              <li
                key={navlink.id}
                className=" uppercase font-extrabold px-4 py-2"
              >
                {navlink.link}
              </li>
            </a>
          );
        })}
      </ul>
      <button>
        {!isSidebarOpen && 
        <GiHamburgerMenu size={30} className="block lg:hidden" onClick={toggleSidebar}/>
        }
      
      </button>
      <img src={eyeButton} alt="Eye button" />
      {isSidebarOpen && (
        <div className="lg:hidden absolute top-0 left-0 h-screen w-64 bg-black">
          <AiOutlineClose
            size={30}
            className="text-white absolute top-4 left-4 cursor-pointer"
            onClick={toggleSidebar}
          />
          <ul className="pt-16">
            {navLinks.map((navlink) => {
              return (
                <a href="/" key={navlink.id}>
                  <hr className="my-2 mx-4 opacity-20"/>
                  <li className="uppercase font-extrabold px-4 ml-8 py-2 text-white">{navlink.link}</li>
                </a>
              );
            })}
          </ul>
          <hr className="my-2 mx-4 opacity-20"/>

        </div>
      )}
    </div>
  );
};

export default Navbar;
