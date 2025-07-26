import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Mahaganpati Reading Room. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;