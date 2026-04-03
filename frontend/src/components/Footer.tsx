import React from 'react';
import { Car, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">ADVANCE CAR HUB</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for buying, selling, and modifying cars. We connect car enthusiasts with top mechanics and modification services.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/cars" className="text-gray-300 hover:text-white">Cars</Link></li>
              <li><Link to="/modifications" className="text-gray-300 hover:text-white">Modifications</Link></li>
              <li><Link to="/mechanics" className="text-gray-300 hover:text-white">Mechanics</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/cars" className="text-gray-300 hover:text-white">Buy Cars</Link></li>
              <li><Link to="/sell" className="text-gray-300 hover:text-white">Sell Your Car</Link></li>
              <li><Link to="/modifications" className="text-gray-300 hover:text-white">Car Modifications</Link></li>
              <li><Link to="/mechanics" className="text-gray-300 hover:text-white">Expert Mechanics</Link></li>
              <li><Link to="/inspections" className="text-gray-300 hover:text-white">Car Inspections</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-400" />
                <span className="text-gray-300">69-Advance Car Hub,Near SBR,Ahmedabad</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">info@advancecarhub.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ADVANCE CAR HUB. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link to="/feedback" className="text-gray-400 hover:text-white">
                Feedback
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
