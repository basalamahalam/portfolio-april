import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navRef = useRef();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  // Perubahan dilakukan di dalam fungsi ini
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#c75d2c] border-b-2 border-[#c75d2c] lg:py-2"
      : "text-[#443826] hover:text-[#c75d2c] transition duration-500 border-b-2 border-transparent";
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-30 flex items-center justify-between w-full max-w-full px-10 py-3 mx-auto text-[#443826] bg-opacity-75 h-18 2xl:px-64 xl:px-32 lg:px-20 md:py-0">
        <Link to="/">
          <p className="text-base font-semibold tracking-wider text-[#c75d2c] font-lato md:text-lg">
            Afrilla Muthi
          </p>
        </Link>
        <div className="flex items-center justify-start">
          <ul className="items-center hidden md:flex">
            <li
              className={`p-8 font-poppins font-medium tracking-wider ${getLinkClass(
                "/"
              )}`}
            >
              <Link to="/" className="nav_link">
                Home
              </Link>
            </li>
            <li
              className={`p-8 font-poppins font-medium tracking-wider ${getLinkClass(
                "/resume"
              )}`}
            >
              <Link to="/resume" className="nav_link">
                Resume
              </Link>
            </li>
            <li
              className={`p-8 font-poppins font-medium tracking-wider ${getLinkClass(
                "/projects"
              )}`}
            >
              <Link to="/projects" className="nav_link">
                Projects
              </Link>
            </li>
            <a href="mailto:basalamahalam2@gmail.com" className="p-4">
              <button className="font-poppins px-6 py-1.5 tracking-wide text-[#443826]">
                Interested?
              </button>
            </a>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          <div
            className={`transition-transform duration-500 ${
              nav ? "rotate-90" : "rotate-0"
            }`}
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      <div
        ref={navRef}
        className={`fixed top-18 left-0 w-full bg-primary backdrop-blur-md shadow-lg md:hidden transition-transform duration-500 ${
          nav ? "translate-y-14" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col px-10">
          <li
            onClick={handleNav}
            className={`mt-3 py-3 text-sm font-poppins font-medium tracking-wider ${getLinkClass(
              "/"
            )}`}
          >
            <Link to="/" className="block w-full px-3 nav_link">
              Home
            </Link>
          </li>
          <li
            onClick={handleNav}
            className={`py-3 text-sm font-poppins font-medium tracking-wider ${getLinkClass(
              "/resume"
            )}`}
          >
            <Link to="/resume" className="block w-full px-3 nav_link">
              Resume
            </Link>
          </li>
          <li
            onClick={handleNav}
            className={`py-3 text-sm font-poppins font-medium tracking-wider ${getLinkClass(
              "/projects"
            )}`}
          >
            <Link to="/projects" className="block w-full px-3 nav_link">
              Projects
            </Link>
          </li>
          <li
            onClick={handleNav}
            className="py-3 text-sm font-medium tracking-wider font-poppins"
          >
            <a
              href="mailto:basalamahalam2@gmail.com"
              className="block w-full px-3 transition duration-500 nav_link hover:text-[#c75d2c]"
            >
              Interested?
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
