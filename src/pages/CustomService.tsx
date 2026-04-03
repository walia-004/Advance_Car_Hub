import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomService: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-8"
      style={{ 
        backgroundImage: "url('https://wallpapercave.com/wp/wp6487006.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed" 
      }}
    >
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Request a Custom Service</h1>
        <p className="text-lg text-white mb-4">
          Have a unique modification in mind? Let us know your requirements, and our team will create a tailored solution just for you.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-200 focus:ring focus:ring-blue-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-200 focus:ring focus:ring-blue-300"
            required
          />
          <textarea
            rows={4}
            placeholder="Describe your custom modification needs"
            className="w-full p-3 border border-white rounded-lg bg-transparent text-white placeholder-gray-200 focus:ring focus:ring-blue-300"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomService;