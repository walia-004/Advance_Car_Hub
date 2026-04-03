import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, rating, message } = formData;

    if (!name || !email || !rating || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    console.log('Feedback submitted:', formData);

    setFormData({
      name: '',
      email: '',
      rating: '',
      message: ''
    });


    setSuccessMessage('Thanks for submitting the feedback!');

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 4000);
  };

  return (
      <div
          className="min-h-screen bg-cover bg-center relative flex justify-center items-center"
          style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6487006.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

        <div className="w-full max-w-xl p-8 rounded-lg z-10 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">We Value Your Feedback</h2>

          {error && (
              <div className="bg-red-500 bg-opacity-70 text-white p-3 rounded mb-4 text-center">
                {error}
              </div>
          )}

          {successMessage && (
              <div className="bg-white text-green-600 p-4 rounded mb-4 text-center font-semibold shadow-md">
                {successMessage}
              </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white focus:outline-none"
                  placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white focus:outline-none"
                  placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full p-2 border border-white rounded bg-transparent text-white focus:outline-none"
              >
                <option value="">Select a rating</option>
                <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                <option value="4">⭐⭐⭐⭐ - Good</option>
                <option value="3">⭐⭐⭐ - Average</option>
                <option value="2">⭐⭐ - Poor</option>
                <option value="1">⭐ - Very Bad</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white focus:outline-none"
                  placeholder="Your message"
              />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 bg-opacity-80 text-white py-2 px-4 rounded hover:bg-opacity-100 transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
  );
};

export default Feedback;
