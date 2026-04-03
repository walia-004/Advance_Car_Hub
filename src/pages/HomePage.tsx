import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Settings, PenTool as Tool, ShieldCheck } from 'lucide-react';
import { cars, mechanics, modificationServices } from '../data';

const HomePage: React.FC = () => {
  // Get featured cars (first 3)
  const featuredCars = cars.slice(0, 3);
  
  // Get featured mechanics (first 3)
  const featuredMechanics = mechanics.slice(0, 3);
  
  // Get featured modification services (first 3)
  const featuredServices = modificationServices.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to ADVANCE CAR HUB</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your one-stop destination for buying, selling, and modifying cars. Connect with top mechanics and find the perfect vehicle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/cars" className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Browse Cars
              </Link>
              <Link to="/register" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition">
                Sell Your Car
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      
      
      {/* Featured Cars Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Cars</h2>
            <p className="mt-4 text-xl text-gray-600">Discover our handpicked selection of quality vehicles</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map(car => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={car.images[0]} 
                    alt={car.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.title}</h3>
                  <div className="flex justify-between mb-4">
                    <span className="text-blue-700 font-bold text-lg">Rs:{car.price.toLocaleString()}</span>
                    <span className="text-gray-600">{car.year} • {car.mileage.toLocaleString()} mi</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{car.description}</p>
                  <Link 
                    to={`/cars/${car.id}`} 
                    className="block w-full text-center bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/cars" 
              className="inline-block bg-white text-blue-700 border border-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              View All Cars
            </Link>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need for your automotive journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Buy & Sell Cars</h3>
              <p className="text-gray-600">
                Browse our extensive collection of quality vehicles or list your car for sale on our platform.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Car Modifications</h3>
              <p className="text-gray-600">
                Customize your vehicle with our range of performance and aesthetic modification services.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tool className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Mechanics</h3>
              <p className="text-gray-600">
                Connect with our network of skilled mechanics specializing in various automotive services.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Mechanics Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Expert Mechanics</h2>
            <p className="mt-4 text-xl text-gray-600">Meet our team of skilled automotive professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMechanics.map(mechanic => (
              <div key={mechanic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={mechanic.image} 
                    alt={mechanic.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{mechanic.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{mechanic.specialization}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`h-5 w-5 ${i < Math.floor(mechanic.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{mechanic.rating} • {mechanic.experience} years exp.</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{mechanic.description}</p>
                  <Link 
                    to={`/mechanics/${mechanic.id}`} 
                    className="block w-full text-center bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/mechanics" 
              className="inline-block bg-white text-blue-700 border border-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              View All Mechanics
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured Modification Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Popular Modification Services</h2>
            <p className="mt-4 text-xl text-gray-600">Upgrade your vehicle with our professional modification services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <div key={service.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 font-bold">Rs{service.price.toLocaleString()}</span>
                    <Link 
                      to={`/modifications/${service.id}`} 
                      className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/modifications" 
              className="inline-block bg-white text-blue-700 border border-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600">Hear from our satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "I found my dream car on ADVANCE CAR HUB at an amazing price. The process was smooth and the seller was very responsive. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  AP
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-medium">Ayish Parihar</h4>
                  <p className="text-gray-500 text-sm">Car Buyer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The modification services offered by ADVANCE CAR HUB transformed my vehicle completely. The team was professional and the results exceeded my expectations."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  SD
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-medium">Shub Dave </h4>
                  <p className="text-gray-500 text-sm">Car Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "Sold my car within a week of listing it on ADVANCE CAR HUB. The platform is user-friendly and the support team was helpful throughout the process."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  RJ
                </div>
                <div className="ml-3">
                  <h4 className="text-gray-900 font-medium">Rohit Jaat</h4>
                  <p className="text-gray-500 text-sm">Car Seller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join ADVANCE CAR HUB today to buy, sell, or modify your car. Our platform connects you with the best deals and services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">

              <Link to="/cars" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition">
                Browse Cars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;