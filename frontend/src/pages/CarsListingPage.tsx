import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { cars } from '../data';
import { Car } from '../types';

const CarsListingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2000, 2025]);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Get unique makes for filter
  const makes = Array.from(new Set(cars.map(car => car.make)));
  
  // Filter cars based on search and filters
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMake = selectedMakes.length === 0 || selectedMakes.includes(car.make);
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];
    const matchesYear = car.year >= yearRange[0] && car.year <= yearRange[1];
    
    return matchesSearch && matchesMake && matchesPrice && matchesYear;
  });
  
  const toggleMake = (make: string) => {
    if (selectedMakes.includes(make)) {
      setSelectedMakes(selectedMakes.filter(m => m !== make));
    } else {
      setSelectedMakes([...selectedMakes, make]);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Cars</h1>
          <p className="text-gray-600">Find your perfect car from our extensive collection</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by make, model, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
              {filtersOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
            </button>
          </div>
        </div>
        
        {/* Filters */}
        {filtersOpen && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Make Filter */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Make</h3>
                <div className="space-y-2">
                  {makes.map(make => (
                    <div key={make} className="flex items-center">
                      <input
                        id={`make-${make}`}
                        type="checkbox"
                        checked={selectedMakes.includes(make)}
                        onChange={() => toggleMake(make)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`make-${make}`} className="ml-2 text-sm text-gray-700">
                        {make}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Rs{priceRange[0].toLocaleString()}</span>
                    <span>Rs{priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between">
                    <input
                      type="number"
                      min="0"
                      max={priceRange[1]}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-24 p-1 text-sm border border-gray-300 rounded"
                    />
                    <input
                      type="number"
                      min={priceRange[0]}
                      max="10000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-24 p-1 text-sm border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
              
              {/* Year Range Filter */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Year</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{yearRange[0]}</span>
                    <span>{yearRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="2025"
                    step="1"
                    value={yearRange[1]}
                    onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between">
                    <input
                      type="number"
                      min="2000"
                      max={yearRange[1]}
                      value={yearRange[0]}
                      onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
                      className="w-24 p-1 text-sm border border-gray-300 rounded"
                    />
                    <input
                      type="number"
                      min={yearRange[0]}
                      max="2025"
                      value={yearRange[1]}
                      onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                      className="w-24 p-1 text-sm border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setSelectedMakes([]);
                  setPriceRange([0, 10000000]);
                  setYearRange([2000, 2025]);
                }}
                className="mr-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setFiltersOpen(false)}
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'}
          </p>
        </div>
        
        {/* Car Listings */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car: Car) => (
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
                    <span className="text-blue-700 font-bold text-lg">Rs{car.price.toLocaleString()}</span>
                    <span className="text-gray-600">{car.year} • {car.mileage.toLocaleString()} mi</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {car.make}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {car.model}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {car.fuelType}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {car.transmission}
                      </span>
                    </div>
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
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No cars found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or filters to find more results.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedMakes([]);
                setPriceRange([0, 1000000]);
                setYearRange([2000, 2025]);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsListingPage;