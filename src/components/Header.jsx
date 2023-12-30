import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/' className="text-2xl font-bold">My Pokemon</Link>

        <ul className="flex space-x-4">
          <li>
            <Link to='/' className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to='/favourites' className="hover:text-gray-300">Favourites</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
