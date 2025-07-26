import React from 'react';
import { contactData } from '../utils/mockdata';

const LibraryInfo: React.FC = () => {

  return (
    <section className="my-8 p-6 bg-gray-900 bg-opacity-80 text-white rounded-lg backdrop-blur-sm">
      <h2 className="text-xl font-bold mb-4">Library Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Coordinator</h3>
          <p>{contactData.coordinator.name}</p>
          <p>Contact: {contactData.coordinator.email}</p>
        </div>
        <div>
          <h3 className="font-semibold">Facilities</h3>
          <ul className="list-disc list-inside">
            <li>Wi-Fi Access</li>
            <li>Quiet Study Zones</li>
            <li>Dining Area</li>
            <li>Discussion Area</li>
            <li>Marathi and English Newspapers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Location</h3>
          <p>Senapati Bapat Road, Near Ratna Memorial Hospital, Pune, India</p>
          <div className="mt-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.5067596300837!2d73.82774193967289!3d18.528291200000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff2ed3ac15f%3A0xd63b3a561ac9ce6e!2z4KSu4KS54KS-4KSX4KSj4KSq4KSk4KWAIOCkuOCljeCkn-CkoeClgCDgpLDgpYLgpK4!5e0!3m2!1smr!2sin!4v1753531451070!5m2!1smr!2sin"  
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            >
              </iframe>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">Timings</h3>
          <p>Monday to Saturday: 6:00 AM - 11:00 PM</p>
          <p>Sunday: 6:00 AM - 10:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default LibraryInfo;