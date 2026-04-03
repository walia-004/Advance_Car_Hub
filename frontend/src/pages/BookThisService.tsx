import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modificationServices } from '../data';

const BookThisService: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = modificationServices.find(s => s.id.toString() === id);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
        navigate('/'); // ⬅️ Redirect to home after popup
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [showPopup, navigate]);

  const handleSubmit = () => {
    setShowPopup(true);
  };

  if (!service) {
    return (
        <div className="flex justify-center items-center min-h-screen text-red-600 text-2xl">
          Service not found.
        </div>
    );
  }

  const getPopupMessage = () => {
    switch (id) {
      case '1':
        return 'Bring your car on Monday after 10 AM';
      case '2':
        return 'Bring your car on Thursday after 10 AM';
      case '3':
        return 'Bring your car on Wednesday after 12 PM';
      case '4':
        return 'Bring your car on any-day';
      case '5':
        return 'Bring your car on Friday and collect the car on Saturday evening';
      case '6':
        return 'Bring your car on Tuesday after 12 PM';
      default:
        return 'Bring your car on Wednesday at 2 PM';
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8 relative">
        <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg p-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">{service.name}</h1>
            <p className="text-blue-700 font-medium text-lg">Category: {service.category}</p>
          </div>

          <img
              src={service.image}
              alt={service.name}
              className="w-full h-[500px] object-cover rounded-lg mb-6"
          />

          <p className="text-gray-600 text-lg mb-6">{service.description}</p>

          <div className="text-2xl font-bold text-blue-700 mb-6">
            Price: Rs{service.price.toLocaleString()}
          </div>

          <div className="mt-6">
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-700 text-white py-3 text-lg rounded-md hover:bg-blue-800 transition"
            >
              Book This Service
            </button>
          </div>
        </div>

        {showPopup && (
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg text-lg font-semibold">
              {getPopupMessage()}
            </div>
        )}
      </div>
  );
};

export default BookThisService;
