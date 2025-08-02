import React from 'react';
import { successStories } from '../utils/successData';

const SuccessStories: React.FC = () => {
  return (
    <section className="my-16 py-12 bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            <span className="text-white bg-clip-text">Our Successful Students</span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Discover the journeys of our brightest alumni who turned their dedication into remarkable achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Horizontal scrolling container */}
          <div className="flex overflow-x-auto pb-10 space-x-8 px-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            {successStories.map((student) => (
              <div 
                key={student.id} 
                className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Student photo with decorative elements */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold z-20">
                    Achiever
                  </div>
                  <img 
                    src={student.photo} 
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* Name and year badge */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl font-bold text-white">{student.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="bg-gray-700 text-amber-300 text-xs px-2 py-1 rounded">
                        Batch {student.year}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-5">
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-amber-300">{student.achievement}</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Achieved through dedication and countless hours at our reading room
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-gray-700 pt-4">
                    <a 
                      href={`tel:${student.phone}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center mr-2 group-hover:bg-cyan-500/20 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      Contact
                    </a>
                    
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${star <= 4 ? 'text-amber-400' : 'text-gray-600'}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll hint */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        
        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">97%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">850+</div>
            <div className="text-gray-300">Students</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
            <div className="text-gray-300">Access</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700">
            <div className="text-4xl font-bold text-amber-400 mb-2">5.0</div>
            <div className="text-gray-300">Rating</div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-32 h-32 bg-amber-400 rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-600 rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
    </section>
  );
};

export default SuccessStories;