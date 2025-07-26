import React from 'react';
import { successStories } from '../utils/successData';

const SuccessStories: React.FC = () => {
  return (
    <section className="my-8 p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Successful Students</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {successStories.map(student => (
          <div key={student.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={student.photo} 
              alt={student.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{student.name}</h3>
              <p className="text-green-400">{student.achievement} ({student.year})</p>
              <a 
                href={`tel:${student.phone}`}
                className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
              >
                Contact Alumni
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;