import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-20 top-0 left-0 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjusts for fixed navbar height
                  activeClass="active"
                  className="cursor-pointer px-3 py-2 rounded-md text-md font-medium hover:bg-gray-700"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
