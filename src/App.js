import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import CarSearch from './components/CarSearch';
import VehicleFeatures from './components/VehicleFeatures';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import VehicleDepartments from './components/VehicleDepartment';
import Header from './components/header/Header';
import AboutUs from './components/AboutUs'; // Import About Us component
import BodystyleComponent from './components/BodystyleComponent';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <CarSearch />
                  <VehicleFeatures />
                  <VehicleDepartments />
                  <BodystyleComponent/>
                  <Testimonials />
                  <Newsletter />
                </>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
