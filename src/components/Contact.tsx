import React from 'react';
import { contactData } from '../utils/mockdata';

const Contact: React.FC = () => {
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactData.coordinator.phone}?text=I'm interested in admission to the reading room`);
  };

  return (
    <section className="my-8 p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Admission Inquiry</h2>
      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <span className="mr-2">Contact Coordinator via WhatsApp</span>
      </button>
    </section>
  );
};

export default Contact;