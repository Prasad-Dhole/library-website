import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Seats from './pages/Seats';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/seats" element={<Seats />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;