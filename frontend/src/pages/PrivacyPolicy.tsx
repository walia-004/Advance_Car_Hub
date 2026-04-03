import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-8"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp6487006.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-transparent rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="text-white mb-4">
          At ADVANCE CAR HUB, we respect your privacy and are committed to protecting your personal data. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">1. Information We Collect</h2>
        <p className="text-white mb-2">We may collect and process the following data:</p>
        <ul className="list-disc list-inside text-white mb-4">
          <li>Personal identification information (name, email, phone number, etc.).</li>
          <li>Usage data (pages visited, time spent on site, etc.).</li>
          <li>Cookies and tracking technologies to improve your experience.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">2. How We Use Your Information</h2>
        <p className="text-white mb-2">We use the collected information for the following purposes:</p>
        <ul className="list-disc list-inside text-white mb-4">
          <li>To provide and improve our services.</li>
          <li>To personalize your experience on our platform.</li>
          <li>To send updates, promotions, or important notices.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">3. Sharing Your Information</h2>
        <p className="text-white mb-4">
          We do not sell, trade, or rent users' personal identification information. 
          We may share generic aggregated demographic information with our partners for the purposes outlined above.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">4. Security of Your Information</h2>
        <p className="text-white mb-4">
          We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">5. Changes to This Privacy Policy</h2>
        <p className="text-white mb-4">
          We may update this Privacy Policy from time to time. We encourage users to frequently check this page for any changes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">6. Contact Us</h2>
        <p className="text-white mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-white font-semibold">Email: info@advancecarhub.com</p>
        <p className="text-white font-semibold">Phone: +91 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;