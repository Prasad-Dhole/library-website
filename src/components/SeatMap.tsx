import React, { useState } from 'react';

const SeatMap: React.FC = () => {

  const coordinatorNumber = '+919764543076'; // Replace with actual number
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${coordinatorNumber}?text=I'm interested in admission to the reading room`);
  };

  const [seats, setSeats] = useState([
    { id: 1, reserved: false },
    { id: 2, reserved: false },
    { id: 3, reserved: false },
    { id: 4, reserved: false },
    { id: 5, reserved: false },
    { id: 6, reserved: false },
    { id: 7, reserved: false },
    { id: 8, reserved: false },
    { id: 9, reserved: false },
    { id: 10, reserved: false },
    { id: 11, reserved: false },
    { id: 12, reserved: false },
    { id: 13, reserved: false },
    { id: 14, reserved: false },
    { id: 15, reserved: false },
    { id: 16, reserved: false },
    { id: 17, reserved: false },
    { id: 18, reserved: false },
    { id: 19, reserved: false },
    { id: 20, reserved: false },
    { id: 21, reserved: false },
    { id: 22, reserved: false },
    { id: 23, reserved: false },
    { id: 24, reserved: false },
    { id: 25, reserved: false },
    { id: 26, reserved: true },
    { id: 27, reserved: false },
    { id: 28, reserved: false },
    { id: 29, reserved: false },
    { id: 30, reserved: false },
    { id: 31, reserved: false },
    { id: 32, reserved: true },
    { id: 33, reserved: false },
    { id: 34, reserved: false },
    { id: 35, reserved: false },
    { id: 36, reserved: true },
    { id: 37, reserved: false },
    { id: 38, reserved: true },
    { id: 39, reserved: false },
    { id: 40, reserved: false },
    { id: 41, reserved: true },
    { id: 42, reserved: false },
    { id: 43, reserved: false },
    { id: 44, reserved: false },
    { id: 45, reserved: true },
    { id: 46, reserved: false },
    { id: 47, reserved: true },
    { id: 48, reserved: false },
    { id: 49, reserved: false },
    { id: 50, reserved: false },
  ]);

  const toggleReservation = (id: number) => {
    setSeats(seats.map(seat => 
      seat.id === id ? { ...seat, reserved: !seat.reserved } : seat
    ));
  };

  return (
    <><section className="my-8 p-4 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Seat Availability</h2>
      <div className="grid grid-cols-10 md:grid-cols-14 gap-4">
        {seats.map(seat => (
          <div
            key={seat.id}
            onClick={() => toggleReservation(seat.id)}
            className={`p-4 rounded-lg cursor-pointer text-center ${seat.reserved ? 'bg-red-600' : 'bg-green-600'}`}
          >
            Seat {seat.id}
            <div>{seat.reserved ? 'Reserved' : 'Available'}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm">
        <p>Click on a seat to toggle reservation status (demo only - no data is stored)</p>
      </div>
    </section><section className="my-8 p-4 bg-gray-900 text-white rounded-lg">
        <h2 className="text-xl font-bold mb-4">Hurry Up, Grab you seat now and Start Chasing your dreams.</h2>
        <h6 className="text-xl font-bold mb-4">You are just a click away from new begining.</h6>
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <span className="mr-2">Contact Coordinator via WhatsApp</span>
        </button>
      </section></>
  );
};

export default SeatMap;