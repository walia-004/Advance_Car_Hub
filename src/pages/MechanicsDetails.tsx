import React from 'react'; 
import { useParams } from 'react-router-dom';
import { mechanics } from '../data';
import { Star, Phone, Mail } from 'lucide-react';

const MechanicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const mechanic = mechanics.find(m => m.id.toString() === id);

  if (!mechanic) {
    return <div className="flex justify-center items-center min-h-screen text-red-500 text-2xl">Mechanic not found</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="h-[500px] overflow-hidden">
          <img 
            src={mechanic.image} 
            alt={mechanic.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{mechanic.name}</h1>
          <p className="text-blue-700 font-medium text-xl mb-4">{mechanic.specialization}</p>
          
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-6 w-6 ${i < Math.floor(mechanic.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                />
              ))}
            </div>
            <span className="ml-3 text-gray-600 text-lg">{mechanic.rating} • {mechanic.experience} years exp.</span>
          </div>

          <p className="text-gray-700 text-lg mb-6">{mechanic.description}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-700 text-lg">
              <Phone className="h-6 w-6 mr-3 text-blue-700" />
              <span>{mechanic.contact}</span>
            </div>
            <div className="flex items-center text-gray-700 text-lg">
              <Mail className="h-6 w-6 mr-3 text-blue-700" />
              <span>{mechanic.name.toLowerCase().replace(' ', '.')}@advancecarhub.com</span>
            </div>
          </div>

          <div className="mt-6">
            <a 
              href={`/book-mechanic/${mechanic.id}`} 
              className="block bg-blue-700 text-white text-center py-4 text-lg rounded-md hover:bg-blue-800 transition"
            >
              Book This Mechanic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicDetail;