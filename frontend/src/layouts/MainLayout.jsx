import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-max bg-gray-100">
      <nav className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl">ProteoScope</h1>
        <ul className="flex space-x-4 mt-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/analyze" className="text-white">
              Analyze Protein
            </Link>
          </li>
          <li>
            <Link to="/fetch" className="text-white">
              Fetch Protein
            </Link>
          </li>
          <li>
            <Link to="/sequence_converter" className="text-white">
              Sequence Converter
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
