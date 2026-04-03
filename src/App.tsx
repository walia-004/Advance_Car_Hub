import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarsListingPage from './pages/CarsListingPage';
import CarDetailPage from './pages/CarDetailPage';
import MechanicsPage from './pages/MechanicsPage';
import MechanicsDetails from './pages/MechanicsDetails';
import BookingService from './pages/BookingService';
import ConfirmBooking from './pages/ConfirmBooking';
import ModificationsPage from './pages/ModificationsPage';
import CustomService from './pages/CustomService';
import Confirmation from './pages/Confirmation';
import BookThisService from './pages/BookThisService';
import AboutUs from './pages/AboutUs';
import CarInspections from './pages/CarInspection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Feedback from "./pages/Feedback";
import MylistingsPage from "./pages/MylistingsPage";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cars" element={<CarsListingPage />} />
              <Route path="/cars/:id" element={<CarDetailPage />} />
              <Route path="/mechanics" element={<MechanicsPage />} />
              <Route path="/mechanics/:id" element={<MechanicsDetails />} /> 
              <Route path="/book-mechanic/:id" element={<BookingService/>} />
              <Route path="/confirm-booking/:id" element={<ConfirmBooking />} />
              <Route path="/modifications" element={<ModificationsPage />} />
              <Route path="/custom-service" element={<CustomService />} />
              <Route path="/modifications/:id" element={<BookThisService />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/inspections" element={<CarInspections />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService/>}/>
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/mylistings" element={<MylistingsPage />} />
              <Route path="/admin" element={<AdminDashboard/>} />
              {/* Other routes... */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;