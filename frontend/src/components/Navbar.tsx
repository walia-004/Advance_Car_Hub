import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Menu, User, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const { isAuthenticated, currentUser, logout, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">ADVANCE CAR HUB</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-600">Home</Link>
            <Link to="/cars" className="px-3 py-2 rounded-md hover:bg-blue-600">Cars</Link>
            <Link to="/modifications" className="px-3 py-2 rounded-md hover:bg-blue-600">Modifications</Link>
            <Link to="/mechanics" className="px-3 py-2 rounded-md hover:bg-blue-600">Mechanics</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/mylistings" className="px-3 py-2 rounded-md hover:bg-blue-600">My Listings</Link>
                {isAdmin && (
                  <Link to="/admin" className="px-3 py-2 rounded-md hover:bg-blue-600">Admin</Link>
                )}
                <div className="relative group">
                  <button className="flex items-center px-3 py-2 rounded-md hover:bg-blue-600">
                    <User className="h-5 w-5 mr-1" />
                    <span>{currentUser?.name}</span>
                  </button>
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <button 
                      onClick={logout} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="px-3 py-2 rounded-md hover:bg-blue-600">Login</Link>
                <Link to="/register" className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-gray-100">Register</Link>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white hover:text-gray-200 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-600">Home</Link>
            <Link to="/cars" className="block px-3 py-2 rounded-md hover:bg-blue-600">Cars</Link>
            <Link to="/modifications" className="block px-3 py-2 rounded-md hover:bg-blue-600">Modifications</Link>
            <Link to="/mechanics" className="block px-3 py-2 rounded-md hover:bg-blue-600">Mechanics</Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/my-listings" className="block px-3 py-2 rounded-md hover:bg-blue-600">My Listings</Link>
                {isAdmin && (
                  <Link to="/admin" className="block px-3 py-2 rounded-md hover:bg-blue-600">Admin</Link>
                )}
                <Link to="/profile" className="block px-3 py-2 rounded-md hover:bg-blue-600">Profile</Link>
                <button 
                  onClick={logout} 
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 rounded-md hover:bg-blue-600">Login</Link>
                <Link to="/register" className="block px-3 py-2 rounded-md hover:bg-blue-600">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;