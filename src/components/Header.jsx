import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Profile from "./Profile";
import Experience from "./Experience";
import Contact from "./Contact";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fungsi untuk menutup menu saat item diklik
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
    <header className="bg-[#93C5FD] text-white py-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Judul Website */}
        <h1 className="text-2xl font-bold ml-4">Personal Website</h1>

        {/* Navbar untuk Desktop */}
        <nav className="hidden md:block mr-4">
          <ul className="flex space-x-8">
            <li> 
              <Link to="/profile" className="hover:text-gray-800">Profile</Link>
            </li>
            <li>
            <Link to="/experience" className="hover:text-gray-800">Experience</Link>
          </li>
            <li>
            <Link to="/contact" className="hover:text-gray-800">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Menu Burger untuk Mobile */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu untuk Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#93C5FD] text-white py-4 mr-4">
          <ul className="space-y-4">
            <li>
              <a href="/profile" className="block hover:text-gray-800" onClick={closeMenu}>Profile</a>
            </li>
            <li>
              <a href="/experience" className="block hover:text-gray-800" onClick={closeMenu}>Experience</a>
            </li>
            <li>
              <a href="/contact" className="block hover:text-gray-800" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
    <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default Header;