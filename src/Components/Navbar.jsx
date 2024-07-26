import React, { useState } from "react";

// This is a simplified Navbar component
const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
  };

  const navigationLinks = [
    { id: 1, title: "Home", url: "#home" },
    { id: 2, title: "Products", url: "#products" },
    { id: 3, title: "About Us", url: "#about-us" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50  bg-opacity-90">
      <div className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="logo.png" alt="Wozoo Logo" className="h-10 w-auto" />
        </div>

        {/* Search Bar with Icons */}
        <div className="hidden md:flex md:flex-1 md:justify-center items-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="|    Hunt down the hype..."
              className="bg-[#50495B]  text-white px-10 py-2 rounded-full w-full focus:outline-none opacity-60"
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 4a6 6 0 100 12 6 6 0 000-12zM16 16l4 4"
              />
            </svg>
            {/* Filter Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5 5a1 1 0 00-.293.707v5.586l-2.293-2.293A1 1 0 0012 15v-4.586a1 1 0 00-.293-.707l-5-5A1 1 0 016 6V4z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
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
          <nav className="flex flex-col items-center space-y-4 py-4">
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
            {/* Mobile Search Bar with Icons */}
            <div className="relative w-full px-4">
              <input
                type="text"
                placeholder="Hunt down the hype..."
                className="bg-gray-800 text-white px-10 py-2 rounded-full w-full focus:outline-none opacity-90"
              />
              {/* Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zM16 16l4 4"
                />
              </svg>
              {/* Filter Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5 5a1 1 0 00-.293.707v5.586l-2.293-2.293A1 1 0 0012 15v-4.586a1 1 0 00-.293-.707l-5-5A1 1 0 016 6V4z"
                />
              </svg>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
