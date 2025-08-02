import React from 'react';
import { contactData } from '../utils/mockdata';

// Custom icon component with SVG paths
const CustomIcon = ({ path, className }: { path: string; className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d={path} />
  </svg>
);

const LibraryInfo: React.FC = () => {
  // Define icon paths (from Material Design Icons)
  const icons = {
    wifi: "M12 21l3.6-3.6c-1.2-1.2-2.8-1.9-4.6-1.9s-3.4.7-4.6 1.9L12 21zm0-18c-2.3 0-4.3.8-6 2.1l1.8 1.8C9.3 6.3 10.6 6 12 6s2.7.3 3.8.9L17 5.1C15.3 3.8 13.3 3 12 3zm5 5.2l-1.8 1.8c.6.8 1 1.7 1 2.7 0 .3 0 .6-.1.9l2.1 1.9c.5-1.1.8-2.3.8-3.6 0-1.7-.5-3.3-1.4-4.7zm-10 0C5.5 9.7 5 11.3 5 13c0 1.3.3 2.5.8 3.6l2.1-1.9c-.1-.3-.1-.6-.1-.9 0-1 .4-1.9 1-2.7L7 8.2z",
    book: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z",
    users: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    utensils: "M3 2l2 20.23c.13 1.01.97 1.77 2 1.77h10c1.03 0 1.87-.76 2-1.77L21 2H3zm9 19c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6-14H6l-.6 5.98h13.2L18 7z",
    newspaper: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z",
    userTie: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    clock: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
    mapMarker: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
  };

  const facilities = [
    { icon: <CustomIcon path={icons.wifi} className="text-amber-400 text-xl" />, text: "High-Speed Wi-Fi" },
    { icon: <CustomIcon path={icons.book} className="text-amber-400 text-xl" />, text: "Book Collection" },
    { icon: <CustomIcon path={icons.users} className="text-amber-400 text-xl" />, text: "Quiet Study Zones" },
    { icon: <CustomIcon path={icons.utensils} className="text-amber-400 text-xl" />, text: "Dining Area" },
    { icon: <CustomIcon path={icons.users} className="text-amber-400 text-xl" />, text: "Discussion Rooms" },
    { icon: <CustomIcon path={icons.newspaper} className="text-amber-400 text-xl" />, text: "Newspapers" }
  ];

  return (
    <section className="my-16 py-12 bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl shadow-2xl overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-soft-light opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-600 rounded-full mix-blend-soft-light opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="text-white">Library Information</span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Discover our state-of-the-art facilities and services designed to enhance your learning experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Coordinator & Timings */}
          <div className="flex flex-col gap-8">
            {/* Coordinator Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg flex-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mr-4">
                  <CustomIcon path={icons.userTie} className="text-amber-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Coordinator</h3>
              </div>
              <div className="pl-16">
                <p className="text-lg font-medium text-amber-300">{contactData.coordinator.name}</p>
                <p className="text-gray-400 mt-1">{contactData.coordinator.email}</p>
                <a 
                  href={`tel:${contactData.coordinator.phone}`} 
                  className="mt-3 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <CustomIcon path="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" className="h-5 w-5 mr-1" />
                  Contact Coordinator
                </a>
              </div>
            </div>
            
            {/* Timings Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg flex-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                  <CustomIcon path={icons.clock} className="text-purple-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Opening Hours</h3>
              </div>
              <div className="pl-16">
                <div className="flex justify-between py-3 border-b border-gray-700">
                  <span className="text-gray-300">Monday - Saturday</span>
                  <span className="font-medium text-amber-300">6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-300">Sunday</span>
                  <span className="font-medium text-amber-300">6:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Location & Facilities */}
          <div className="flex flex-col gap-8">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg flex-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                  <CustomIcon path={icons.mapMarker} className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Location</h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-300 mb-4">
                  Senapati Bapat Road, Near Ratna Memorial Hospital, Pune, India
                </p>
                <div className="rounded-xl overflow-hidden border border-gray-700">
                  <iframe 
                    title="Library Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.5067596300837!2d73.82774193967289!3d18.528291200000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff2ed3ac15f%3A0xd63b3a561ac9ce6e!2z4KSu4KS54KS-4KSX4KSj4KSq4KSk4KWAIOCkuOCljeCkn-CkoeClgCDgpLDgpYLgpK4!5e0!3m2!1smr!2sin!4v1753531451070!5m2!1smr!2sin"  
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Facilities Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-lg flex-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                  <CustomIcon path={icons.wifi} className="text-green-400 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Facilities</h3>
              </div>
              <div className="pl-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start bg-gray-800/50 p-3 rounded-lg">
                      <div className="mt-1">{facility.icon}</div>
                      <span className="text-gray-300 ml-3 text-sm">{facility.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryInfo;