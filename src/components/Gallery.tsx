import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { id: 1, alt: 'Library exterior', placeholder: 'Exterior View' },
    { id: 2, alt: 'Reading area', placeholder: 'Reading Area' },
    { id: 3, alt: 'Study zone', placeholder: 'Study Zone' },
    { id: 4, alt: 'Book collection', placeholder: 'Book Collection' },
  ];

  return (
    <section className="my-8 p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map(image => (
          <div key={image.id} className="bg-gray-800 h-40 flex items-center justify-center rounded-lg">
            {image.placeholder}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;