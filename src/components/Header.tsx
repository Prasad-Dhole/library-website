import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto">
        <div className="text-center group">
          <h1 className="text-4xl font-serif font-bold tracking-wider text-amber-300 pb-1">
            Mahaganpati Library
            <div className="h-0.5 w-24 bg-amber-400 mx-auto mt-2 transform group-hover:scale-x-110 
                transition-transform duration-300"></div>
          </h1>
          <p className="text-sm text-amber-300 mt-2 font-light tracking-widest">
            EST. 2018 • Where Minds Grow and Ideas Flourish
          </p>
        </div>

        <nav className="flex justify-start mb-2">
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `hover:text-gray-300 px-3 py-1 rounded ${isActive ? 'bg-green-500 text-white font-bold' : ''}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admission" 
                className={({ isActive }) => 
                  `hover:text-gray-300 px-3 py-1 rounded ${isActive ? 'bg-green-500 text-white font-bold' : ''}`
                }
              >
                Admission
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/seats" 
                className={({ isActive }) => 
                  `hover:text-gray-300 px-3 py-1 rounded ${isActive ? 'bg-green-500 text-white font-bold' : ''}`
                }
              >
                Check Seat Availability
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;