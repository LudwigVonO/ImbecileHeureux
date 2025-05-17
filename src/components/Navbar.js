import React, { useState } from "react";

const Navbar = ({isDarkMode,toggleDarkMode}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`bg-gray-100 dark:bg-gray-800 shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Imbécile Heureux
            </h1>
          </div>
          <div className="md:flex space-x-4">
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
              Tu l'as ?
            </a>
            <a
              href="#"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
              Bloje
            </a>
          </div>
          <div className="flex items-center space-x-4">
            
            <button
              onClick={toggleDarkMode}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
              >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
          </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              ☰
            </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Tu l'as ?
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Bloje
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;