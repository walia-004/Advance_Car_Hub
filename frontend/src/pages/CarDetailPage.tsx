import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar, MapPin, User, Clock, Fuel, Gauge, Settings, ArrowLeft,
  ChevronLeft, ChevronRight, MessageSquare
} from 'lucide-react';
import { cars } from '../data';
import { useAuth } from '../context/AuthContext';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isAuthenticated } = useAuth();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupStep, setPopupStep] = useState(1);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const car = cars.find(c => c.id === id);

  if (!car) {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Car Not Found</h1>
            <p className="text-gray-600 mb-6">The car you're looking for doesn't exist or has been removed.</p>
            <Link
                to="/cars"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Cars
            </Link>
          </div>
        </div>
    );
  }

  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % car.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + car.images.length) % car.images.length);
  };

  useEffect(() => {
    if (showPopup && popupStep === 1) {
      const timer = setTimeout(() => {
        setPopupStep(2);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showPopup && popupStep === 2) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        setPopupStep(1);
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup, popupStep, navigate]);

  const renderPopupContent = () => {
    const defaultContent = {
      title: popupStep === 1 ? "Message Sent!" : "Visit Scheduled",
      message: "Thank you for contacting the seller.",
    };

    const messages: Record<string, { title: string; message: string }> = {
      "1": {
        title: popupStep === 1 ? "Message Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send." : "Yes, you can come and see the car.",
      },
      "2": {
        title: popupStep === 1 ? "Request Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send!" : "Yes you can come on Monday.",
      },
      "3": {
        title: popupStep === 1 ? "Request Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send!" : "Yes you can come on Wednesday between 3pm-5pm .",
      },
      "4": {
        title: popupStep === 1 ? "Request Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send!" : "Yes you can come on Tuesday between at any time .",
      },
      "5": {
        title: popupStep === 1 ? "Request Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send!" : "Yes you can come on Friday and see the car.",
      },
      "6": {
        title: popupStep === 1 ? "Request Sent!" : "Seller Response",
        message: popupStep === 1 ? "Message send!" : "Sorry but price is fixed .",
      },
      "7": {
        title: popupStep === 1 ? "Request Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send!" : "Yes you can come on Thursday after 6pm .",
      },
      "8": {
        title: popupStep === 1 ? "Request Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send!" : "Yes you can come and visit the car when you get time .",
      },
      "9": {
        title: popupStep === 1 ? "Request Sent!" : "Visit Scheduled",
        message: popupStep === 1 ? "Message send!" : "Yes you can come and visit my driver will show you the car.",
      },
    };

    return messages[id ?? ''] || defaultContent;
  };

  const popupContent = renderPopupContent();

  const handleSendMessage = () => {
    if (!message.trim()) {
      alert('Please enter a message before sending.');
      return;
    }
    setShowPopup(true);
    setPopupStep(1);
  };
  return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-blue-700">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link to="/cars" className="hover:text-blue-700">Cars</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-gray-900 font-medium truncate">{car.title}</li>
            </ol>
          </nav>

          {/* Title */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{car.title}</h1>
                <p className="text-gray-600 mt-1">
                  Listed by {car.sellerName} • {new Date(car.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2">
                {/* Image Gallery */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                  <div className="relative h-96">
                    <img
                        src={car.images[activeImageIndex]}
                        alt={car.title}
                        className="w-full h-full object-cover"
                    />
                    {car.images.length > 1 && (
                        <>
                          <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100">
                            <ChevronLeft className="h-6 w-6 text-gray-800" />
                          </button>
                          <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100">
                            <ChevronRight className="h-6 w-6 text-gray-800" />
                          </button>
                        </>
                    )}
                  </div>
                  {car.images.length > 1 && (
                      <div className="flex p-4 space-x-2 overflow-x-auto">
                        {car.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImageIndex(index)}
                                className={`h-16 w-24 flex-shrink-0 rounded overflow-hidden border-2 ${index === activeImageIndex ? 'border-blue-700' : 'border-transparent'}`}
                            >
                              <img src={image} alt={`${car.title} - Image ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                      </div>
                  )}
                </div>

                {/* Car Details */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Car Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-700 mr-2" />
                      <div><p className="text-sm text-gray-500">Year</p><p className="font-medium">{car.year}</p></div>
                    </div>
                    <div className="flex items-center">
                      <Gauge className="h-5 w-5 text-blue-700 mr-2" />
                      <div><p className="text-sm text-gray-500">Mileage</p><p className="font-medium">{car.mileage.toLocaleString()} miles</p></div>
                    </div>
                    <div className="flex items-center">
                      <Fuel className="h-5 w-5 text-blue-700 mr-2" />
                      <div><p className="text-sm text-gray-500">Fuel Type</p><p className="font-medium">{car.fuelType}</p></div>
                    </div>
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 text-blue-700 mr-2" />
                      <div><p className="text-sm text-gray-500">Transmission</p><p className="font-medium">{car.transmission}</p></div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                  <p className="text-gray-700 whitespace-pre-line">{car.description}</p>
                </div>
              </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              {/* Price */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Rs{car.price.toLocaleString()}</h2>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {car.forSale ? 'For Sale' : 'Sold'}
                </span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center mb-4">
                    <User className="h-5 w-5 text-blue-700 mr-2" />
                    <div><p className="text-sm text-gray-500">Seller</p><p className="font-medium">{car.sellerName}</p></div>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-blue-700 mr-2" />
                    <div><p className="text-sm text-gray-500">Location</p><p className="font-medium">Ahmedabad, Gujarat</p></div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-700 mr-2" />
                    <div><p className="text-sm text-gray-500">Listed</p><p className="font-medium">{new Date(car.createdAt).toLocaleDateString()}</p></div>
                  </div>
                </div>
              </div>

              {/* Contact Seller */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Seller</h2>
                {isAuthenticated ? (
                    <div>
                      <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="I'm interested in this car. Is it still available?"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        ></textarea>
                      </div>
                      <button
                          onClick={handleSendMessage}
                          className="w-full flex justify-center items-center bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
                      >
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Send Message
                      </button>
                    </div>
                ) : (
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">You need to be logged in to contact the seller.</p>
                      <Link to="/login" className="block w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition text-center">
                        Login to Contact
                      </Link>
                    </div>
                )}
              </div>

              {/* Similar Cars */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Similar Cars</h2>
                <div className="space-y-4">
                  {cars
                      .filter(c => c.id !== car.id && c.make === car.make)
                      .slice(0, 3)
                      .map(similarCar => (
                          <Link key={similarCar.id} to={`/cars/${similarCar.id}`} className="block">
                            <div className="flex space-x-3">
                              <div className="h-16 w-20 flex-shrink-0 rounded overflow-hidden">
                                <img src={similarCar.images[0]} alt={similarCar.title} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{similarCar.title}</h3>
                                <p className="text-sm text-blue-700 font-medium">Rs{similarCar.price.toLocaleString()}</p>
                                <p className="text-xs text-gray-500">{similarCar.year} • {similarCar.mileage.toLocaleString()} mi</p>
                              </div>
                            </div>
                          </Link>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
                <h2 className="text-lg font-semibold mb-2">{popupContent.title}</h2>
                <p className="text-gray-700 mb-4">{popupContent.message}</p>
                <button
                    onClick={() => {
                      setShowPopup(false);
                      setPopupStep(1);
                    }}
                    className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                >
                  Close
                </button>
              </div>
            </div>

        )}
      </div>
  );
};

export default CarDetailPage;
