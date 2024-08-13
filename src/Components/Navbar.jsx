import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "../constants";

// This is a simplified Navbar component
const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="hidden md:block absolute inset-0 w-auto bg-cover bg-transparent bg-center bg-opacity-10 opacity-80" style={{ backgroundImage: 'url("/subtlegrad.png")' }}></div>
      <div className="relative bg-opacity-20">
        <div className="flex items-center justify-between p-7 px-30 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img src="logo.png" loading="eager" alt="Wozoo Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex md:ml-auto md:mr-20 space-x-48">
            {navigationLinks.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className="text-white hover:text-[#F7CC00] font-quicksand transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleNavigation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {openNavigation && (
          <div className="md:hidden bg-black bg-opacity-90">
            <nav className="flex flex-col items-center space-y-4 gap-10 py-4">
              {navigationLinks.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className="text-white text-lg hover:text-[#F7CC00] transition-colors"
                  onClick={toggleNavigation} // Close menu on link click
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
