import React from 'react';
import SeatMap from '../components/SeatMap';

const Seats: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <SeatMap />
      </div>
    </div>
  );
};

export default Seats;