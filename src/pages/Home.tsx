import React from 'react';
import LibraryInfo from '../components/LibraryInfo';
import Gallery from '../components/Gallery';
import SuccessStories from '../components/SuccessStories';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <LibraryInfo />
        <Gallery />
        <SuccessStories />
        <Contact />
      </div>
    </div>
  );
};

export default Home;