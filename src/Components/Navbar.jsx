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
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white  focus:outline-none">
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8094 4.07238H0.868221C0.665409 4.07238 0.470903 3.99181 0.327493 3.8484C0.184083 3.70499 0.103516 3.51049 0.103516 3.30767C0.103516 3.10486 0.184083 2.91036 0.327493 2.76695C0.470903 2.62354 0.665409 2.54297 0.868221 2.54297H10.8094C11.0122 2.54297 11.2067 2.62354 11.3501 2.76695C11.4935 2.91036 11.5741 3.10486 11.5741 3.30767C11.5741 3.51049 11.4935 3.70499 11.3501 3.8484C11.2067 3.99181 11.0122 4.07238 10.8094 4.07238ZM17.6917 4.07238H14.6329C14.4301 4.07238 14.2356 3.99181 14.0922 3.8484C13.9488 3.70499 13.8682 3.51049 13.8682 3.30767C13.8682 3.10486 13.9488 2.91036 14.0922 2.76695C14.2356 2.62354 14.4301 2.54297 14.6329 2.54297H17.6917C17.8946 2.54297 18.0891 2.62354 18.2325 2.76695C18.3759 2.91036 18.4565 3.10486 18.4565 3.30767C18.4565 3.51049 18.3759 3.70499 18.2325 3.8484C18.0891 3.99181 17.8946 4.07238 17.6917 4.07238Z"
                fill="white"
              />
              <path
                d="M12.7212 5.9838C12.1918 5.9838 11.6743 5.82683 11.2342 5.53273C10.7941 5.23864 10.451 4.82063 10.2484 4.33157C10.0459 3.84251 9.99285 3.30436 10.0961 2.78518C10.1994 2.26599 10.4543 1.78909 10.8286 1.41478C11.2029 1.04047 11.6798 0.78556 12.199 0.682288C12.7182 0.579016 13.2563 0.632019 13.7454 0.834595C14.2345 1.03717 14.6525 1.38022 14.9466 1.82036C15.2407 2.26051 15.3976 2.77797 15.3976 3.30733C15.3976 4.01717 15.1156 4.69795 14.6137 5.19988C14.1118 5.70182 13.431 5.9838 12.7212 5.9838ZM12.7212 2.16027C12.4943 2.16027 12.2725 2.22755 12.0839 2.35359C11.8953 2.47963 11.7482 2.65877 11.6614 2.86837C11.5746 3.07797 11.5519 3.3086 11.5961 3.53111C11.6404 3.75362 11.7497 3.958 11.9101 4.11842C12.0705 4.27884 12.2749 4.38809 12.4974 4.43235C12.7199 4.47661 12.9505 4.45389 13.1601 4.36707C13.3697 4.28026 13.5489 4.13323 13.6749 3.9446C13.8009 3.75597 13.8682 3.5342 13.8682 3.30733C13.8682 3.00311 13.7474 2.71135 13.5323 2.49624C13.3171 2.28112 13.0254 2.16027 12.7212 2.16027ZM17.6917 11.7191H7.75057C7.54776 11.7191 7.35326 11.6385 7.20985 11.4951C7.06644 11.3517 6.98587 11.1572 6.98587 10.9544C6.98587 10.7516 7.06644 10.5571 7.20985 10.4137C7.35326 10.2702 7.54776 10.1897 7.75057 10.1897H17.6917C17.8946 10.1897 18.0891 10.2702 18.2325 10.4137C18.3759 10.5571 18.4565 10.7516 18.4565 10.9544C18.4565 11.1572 18.3759 11.3517 18.2325 11.4951C18.0891 11.6385 17.8946 11.7191 17.6917 11.7191ZM3.92704 11.7191H0.868221C0.665409 11.7191 0.470903 11.6385 0.327493 11.4951C0.184083 11.3517 0.103516 11.1572 0.103516 10.9544C0.103516 10.7516 0.184083 10.5571 0.327493 10.4137C0.470903 10.2702 0.665409 10.1897 0.868221 10.1897H3.92704C4.12986 10.1897 4.32436 10.2702 4.46777 10.4137C4.61118 10.5571 4.69175 10.7516 4.69175 10.9544C4.69175 11.1572 4.61118 11.3517 4.46777 11.4951C4.32436 11.6385 4.12986 11.7191 3.92704 11.7191Z"
                fill="white"
              />
              <path
                d="M5.83858 13.6303C5.30923 13.6303 4.79176 13.4733 4.35161 13.1792C3.91147 12.8851 3.56842 12.4671 3.36584 11.9781C3.16327 11.489 3.11027 10.9508 3.21354 10.4317C3.31681 9.91248 3.57172 9.43558 3.94603 9.06126C4.32034 8.68695 4.79724 8.43204 5.31643 8.32877C5.83561 8.2255 6.37376 8.2785 6.86282 8.48108C7.35188 8.68366 7.76989 9.0267 8.06398 9.46685C8.35808 9.90699 8.51505 10.4245 8.51505 10.9538C8.51505 11.6637 8.23307 12.3444 7.73113 12.8464C7.2292 13.3483 6.54842 13.6303 5.83858 13.6303ZM5.83858 9.80676C5.61171 9.80676 5.38994 9.87403 5.20131 10.0001C5.01268 10.1261 4.86565 10.3053 4.77884 10.5149C4.69202 10.7245 4.6693 10.9551 4.71356 11.1776C4.75782 11.4001 4.86707 11.6045 5.02749 11.7649C5.18791 11.9253 5.39229 12.0346 5.6148 12.0788C5.83731 12.1231 6.06794 12.1004 6.27754 12.0136C6.48714 11.9267 6.66629 11.7797 6.79233 11.5911C6.91837 11.4025 6.98564 11.1807 6.98564 10.9538C6.98564 10.6496 6.86479 10.3578 6.64967 10.1427C6.43456 9.92761 6.1428 9.80676 5.83858 9.80676Z"
                fill="white"
              />
            </svg>
            
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-24">
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
