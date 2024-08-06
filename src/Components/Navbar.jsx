import React, { useState } from "react";

// This is a simplified Navbar component
const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
  };

  const navigationLinks = [
    { id: 1, title: "Woozoo World", url: "#home" },
    { id: 2, title: "Products", url: "#products" },
    { id: 3, title: "About Us", url: "#about-us" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70">
      <div className="flex items-center justify-between p-7 px-30 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src="logo.png" alt="Wozoo Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:ml-auto md:mr-20 space-x-48">
          {navigationLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-white hover:text-yellow-500 transition-colors"
            >
              {item.title}
            </a>
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
              <a
                key={item.id}
                href={item.url}
                className="text-white text-lg hover:text-yellow-500 transition-colors"
                onClick={toggleNavigation} // Close menu on link click
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
