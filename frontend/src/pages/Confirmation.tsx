import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 1 second delay
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // 1 second after confirmation appears

    // Hide popup after 4 seconds
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 5000); // popup shows for 4 seconds

    // Cleanup timers when component unmounts
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-8 relative">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-lg mb-6">
            We have received your request. Our team will reach out to you regarding your modification as soon as possible.
          </p>
          <button
              onClick={() => navigate('/')}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Back to Home
          </button>
        </div>

        {/* Popup Message */}
        {showPopup && (
            <div className="absolute top-8 bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg animate-bounce transition-all duration-500">
              Bring your car on Wednesday at 12 PM
            </div>
        )}
      </div>
  );
};

export default Confirmation;
