import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, Mail } from 'lucide-react';

interface Mechanic {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  experience: number;
  description: string;
  phone: string;
  email: string;
}

const MechanicsPage: React.FC = () => {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);

  // 🔥 Image mapping (YOUR LINKS)
  const images: { [key: string]: string } = {
    "Akshat": "https://th.bing.com/th/id/R.4eae69983e0e789682ad445396345e8a?rik=WGN7I2JIsmSiBA&riu=http%3a%2f%2fgwrench.com%2fwp-content%2fuploads%2f2020%2f12%2fVistaCarMechanic.jpeg&ehk=fIr1oWPGfbODcKpiWJgz8WWM32dxHrVmdanyD2ifQEM%3d&risl=&pid=ImgRaw&r=0",
    "Naishy": "data:image/jpeg;base64,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",
    "Aarif": "https://mymodernmotors.com/images/services/Under%20Chassis%20Rust%20Coating.jpg",
    "Robert Martinez": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
  };

  useEffect(() => {
    fetch("http://localhost:8000/mechanics")
      .then(res => res.json())
      .then(data => setMechanics(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Mechanics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of skilled automotive professionals ready to help with your car needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {mechanics.map(mechanic => (
            <div key={mechanic.id} className="bg-white rounded-lg shadow-md overflow-hidden">

              {/* 🔥 IMAGE FIXED HERE */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={images[mechanic.name] || "https://via.placeholder.com/300"}
                  alt={mechanic.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{mechanic.name}</h2>
                <p className="text-blue-700 font-medium mb-3">{mechanic.specialization}</p>

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(mechanic.rating)
                            ? 'fill-current'
                            : 'stroke-current fill-none'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {mechanic.rating} • {mechanic.experience} years exp.
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{mechanic.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-2 text-blue-700" />
                    <span>{mechanic.phone}</span>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-2 text-blue-700" />
                    <span>{mechanic.email}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Link 
                    to={`/mechanics/${mechanic.id}`} 
                    className="flex-1 bg-blue-700 text-white text-center py-2 rounded-md hover:bg-blue-800 transition"
                  >
                    View Profile
                  </Link>

                  <Link 
                    to={`/book-mechanic/${mechanic.id}`} 
                    className="flex-1 bg-white text-blue-700 text-center py-2 rounded-md border border-blue-700 hover:bg-blue-50 transition"
                  >
                    Book Service
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MechanicsPage;