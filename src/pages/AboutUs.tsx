import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-8"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6487006.jpg')" }}
    >
      <div className="max-w-6xl mx-auto bg-transparent shadow-xl rounded-lg p-8 text-white">
        <h1 className="text-5xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-bold text-blue-300">Advance Car Hub</span>, your one-stop destination for buying, selling, and modifying cars. We connect car enthusiasts with top mechanics and modification services.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our platform is designed to make car transactions easy, reliable, and transparent. Whether you are looking to buy a new car, sell your existing one, or enhance its performance and aesthetics, we have got you covered.
        </p>

        <h2 className="text-3xl font-semibold mb-4"><b><u>Why Choose Us?</u></b></h2>
        <ul className="list-disc pl-6 text-lg mb-6">
          <li>Wide selection of cars from trusted sellers.</li>
          <li>Expert mechanics for high-quality modifications and repairs.</li>
          <li>Secure and hassle-free transactions.</li>
          <li>24/7 customer support to assist you at every step.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4"><b><u>Our Services</u></b></h2>
        <ul className="list-disc pl-6 text-lg mb-6">
          <li>Buy and Sell Cars</li>
          <li>Car Modifications & Customization</li>
          <li>Expert Mechanic Assistance</li>
          <li>Car Inspections and Maintenance</li>
        </ul>

        
      </div>
    </div>
  );
};

export default AboutUs;
