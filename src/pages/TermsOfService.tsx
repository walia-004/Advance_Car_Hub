import React from 'react';

const TermsOfService: React.FC = () => {
  const backgroundImages = [
    "https://wallpapercave.com/wp/wp6487006.jpg",
    "https://wallpapercave.com/wp/wp6487008.jpg"
  ];
  const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-8 animate-float"
      style={{ 
        backgroundImage: `url('${randomImage}')`,
        backgroundAttachment: "fixed",
        animation: "floatBackground 10s infinite alternate ease-in-out"
      }}
    >
      <style>
        {`
          @keyframes floatBackground {
            0% { transform: translateY(0px); }
            100% { transform: translateY(20px); }
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-transparent rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-white">Terms of Service</h1>
        <p className="text-white mb-4">
          Welcome to ADVANCE CAR HUB! These terms and conditions outline the rules and regulations for the use of our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">1. Acceptance of Terms</h2>
        <p className="text-white mb-4">
          By accessing this website, we assume you accept these terms and conditions. Do not continue to use ADVANCE CAR HUB if you do not agree to all of the terms stated on this page.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">2. Use License</h2>
        <p className="text-white mb-4">
          Unless otherwise stated, ADVANCE CAR HUB and/or its licensors own the intellectual property rights for all material on this website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">3. User Responsibilities</h2>
        <ul className="list-disc list-inside text-white mb-4">
          <li>Do not use the website in any way that causes damage or impairment to availability or accessibility.</li>
          <li>Do not use the website for fraudulent, illegal, or harmful purposes.</li>
          <li>Do not attempt to hack, exploit, or misuse our services.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">4. Limitation of Liability</h2>
        <p className="text-white mb-4">
          ADVANCE CAR HUB will not be held liable for any direct, indirect, or consequential damages arising from the use of our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">5. Changes to Terms</h2>
        <p className="text-white mb-4">
          We reserve the right to modify these terms at any time. It is your responsibility to review this page periodically.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">6. Contact Us</h2>
        <p className="text-white mb-4">
          If you have any questions about our Terms of Service, please contact us at:
        </p>
        <p className="text-white font-semibold">Email: info@advancecarhub.com</p>
        <p className="text-white font-semibold">Phone: +91 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default TermsOfService;
