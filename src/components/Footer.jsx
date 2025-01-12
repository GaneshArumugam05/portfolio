import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6"; // Using Fa6 for FaXTwitter

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Ganesh. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a 
            href="#" 
            className="flex items-center space-x-2 hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-2 hover:text-gray-400"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="#" 
            className="flex items-center space-x-2 hover:text-sky-400"
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
