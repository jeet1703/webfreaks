import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#570FCC] text-white py-10 font-quicksand relative"> 
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 mx-8">
          <h2 className="text-lg md:text-2xl font-bold text-[#F7CC00] mb-4 md:mb-0 font-dangsik ">
            Join our newsletter to follow our news
          </h2>
          <div className="flex items-center space-x-8">
            <input
              type="email"
              placeholder="wozco@gmail.com"
              className=" md:px-8 m px-1 py-2 text-purple-900 rounded-xl focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-3 md:mx-8">
          {/* Left Column: Logo and Description */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img src="/logo.webp" alt="Wozco Logo" className="w-44 md:my-4" />
            </div>
            <p className="text-white text-sm lg:text-md mb-4 md:me-20">
              Think of Wozco as that friend who’s always on the same wavelength
              as you. We get your vibe, your energy, and your desire for
              unforgettable memories. And guess what? We’re not just here to
              recommend experiences - <span className=" font-bold">we are here to matchmake you with the
              activities and hangout buddies that sync perfectly with your
              style.</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#F7CC00]">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-[#F7CC00]">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-[#F7CC00]">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-[#F7CC00]">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {/* Our Company Links */}
            <div>
              <h3 className="font-bold text-xl text-white mb-2">Our Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-bold text-xl text-white mb-2">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    List with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Advertise with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect with Us Links */}
            <div>
              <h3 className="font-bold text-xl text-white mb-2">Connect with Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#F7CC00] text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full absolute bottom-0 left-0  bg-[#410B99] py-1">
          <p className="text-center text-white">
            All Copyrights are reserved by Wozco Entertainment Private Limited ©
          </p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
