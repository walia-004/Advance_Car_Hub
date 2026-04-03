import React from 'react';

const CarInspections: React.FC = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 text-center"
      style={{ 
        backgroundImage: "url('https://wallpapercave.com/wp/wp6487006.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">Car Inspections</h1>
      <p className="text-lg text-white mt-4 max-w-4xl drop-shadow-md">
        Our expert team provides in-depth car inspections to ensure that your vehicle is in top condition.
        Whether you’re buying a new car or maintaining your current one, we offer a detailed checklist
        covering engine performance, safety measures, and overall vehicle health.
      </p>
    </div>
  );
};

export default CarInspections;
