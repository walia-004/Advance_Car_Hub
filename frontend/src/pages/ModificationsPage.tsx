import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { modificationServices } from '../data';
import { ModificationService } from '../types';

const ModificationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Get unique categories for filter
  const categories = Array.from(new Set(modificationServices.map(service => service.category)));
  
  // Filter services based on filters
  const filteredServices = modificationServices.filter(service => {
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesCategory && matchesPrice;
  });
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Car Modification Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your vehicle's performance, aesthetics, and functionality with our professional modification services.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ModificationService) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
        
        {/* Custom Service CTA */}
        <div className="mt-16 bg-blue-700 text-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Modification?</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              Don't see what you're looking for? 
              <p>Our team of experts can create custom modifications tailored to your specific needs and preferences.</p>
            </p>
            <Link 
              to="/custom-service" 
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Request Custom Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModificationsPage;
