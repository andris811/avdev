import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4">
      <ul className="flex justify-center space-x-6 text-lg text-gray-800">
        <li><Link to="intro" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Projects</Link></li>
        <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">About</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
