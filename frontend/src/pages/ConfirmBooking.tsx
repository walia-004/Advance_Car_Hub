import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mechanics } from '../data';

const ConfirmBooking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const mechanic = mechanics.find(m => m.id.toString() === id);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!mechanic) {
    return <div className="flex justify-center items-center min-h-screen text-red-600 text-2xl">Mechanic not found.</div>;
  }

  const handleConfirm = () => {
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Confirm Your Booking</h1>
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img src={mechanic.image} alt={mechanic.name} className="w-32 h-32 rounded-full object-cover" />
          <div className="md:ml-6 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900">{mechanic.name}</h2>
            <p className="text-blue-700 font-medium text-lg">{mechanic.specialization}</p>
          </div>
        </div>
        <p className="text-gray-600 text-lg text-center mb-6">
          {bookingConfirmed
            ? `Booking Accepted! You have successfully booked a service with ${mechanic.name}.`
            : `You are about to book a service with ${mechanic.name}. Please confirm your booking.`}
        </p>

        {!bookingConfirmed ? (
          <button
            onClick={handleConfirm}
            className="w-full bg-green-600 text-white py-3 text-lg rounded-md hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        ) : (
          <div className="w-full bg-green-100 text-green-700 py-3 text-lg text-center rounded-md">
            Booking Accepted
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmBooking;
