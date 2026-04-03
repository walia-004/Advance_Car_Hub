import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mechanics } from '../data';
import { Star, Phone, Mail } from 'lucide-react';

const BookingService: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const mechanic = mechanics.find(m => m.id.toString() === id);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        navigate('/'); // Navigate to home page
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showPopup, navigate]);

  if (!mechanic) {
    return <div className="flex justify-center items-center min-h-screen text-red-600 text-2xl">Mechanic not found.</div>;
  }

  let popupMessage = "Booking Confirmed!";
  if (id === "1") {
    popupMessage = "Booking Confirmed! You can bring your car any-day between 10 AM - 5 PM.";
  } else if (id === "2") {
    popupMessage = "Booking Confirmed! You can bring your car on Monday to Wednesday between 11 PM - 7 PM.";
  } else if (id === "3") {
    popupMessage = "Booking Confirmed! You can bring your car on Thursday to Saturday between 11 AM - 7 PM.";
  } else if (id === "4") {
    popupMessage = "Booking Confirmed! You can bring your car anytime.";
  }

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <img src={mechanic.image} alt={mechanic.name} className="w-56 h-56 rounded-full object-cover" />
            <div className="md:ml-6 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900">{mechanic.name}</h1>
              <p className="text-blue-700 font-medium text-lg">{mechanic.specialization}</p>
              <div className="flex items-center mt-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-6 w-6 ${i < Math.floor(mechanic.rating) ? 'fill-current' : 'stroke-current fill-none'}`} />
                  ))}
                </div>
                <span className="ml-3 text-gray-600 text-lg">{mechanic.rating} • {mechanic.experience} years exp.</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-lg mt-6">{mechanic.description}</p>

          <div className="mt-6">
            <div className="flex items-center text-gray-700 text-lg">
              <Phone className="h-6 w-6 mr-3 text-blue-700" />
              <span>{mechanic.contact}</span>
            </div>
            <div className="flex items-center text-gray-700 text-lg mt-3">
              <Mail className="h-6 w-6 mr-3 text-blue-700" />
              <span>{mechanic.name.toLowerCase().replace(' ', '.')}@advancecarhub.com</span>
            </div>
          </div>

          <div className="mt-8">
            <button
                className="w-full bg-blue-700 text-white text-lg py-3 rounded-md hover:bg-blue-800 transition"
                onClick={() => setShowPopup(true)}
            >
              Confirm Booking
            </button>
          </div>
        </div>

        {/* Centered Popup */}
        {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white text-green-600 font-semibold px-8 py-6 rounded-xl shadow-lg text-xl max-w-md text-center">
                {popupMessage}
              </div>
            </div>
        )}
      </div>
  );
};

export default BookingService;
