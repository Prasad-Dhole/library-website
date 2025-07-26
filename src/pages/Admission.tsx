import React from 'react';
import Contact from '../components/Contact';

const Admission: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Admission Process</h1>
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">How to Join</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Contact the coordinator via WhatsApp for availability</li>
            <li>Visit the reading room for a tour</li>
            <li>Pay the membership fee</li>
            <li>Get your access to precious study space.</li>
          </ol>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Admission;